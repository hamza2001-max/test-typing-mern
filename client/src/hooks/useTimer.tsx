import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useTimerInterface } from "../typescript/types";

type countDownStatusType = "idle" | "running" | "finished";

export const useTimer = (): useTimerInterface => {
  const [countDownStatus, setCountDownStatus] =
    useState<countDownStatusType>("idle");
  const [countDown, setCountDown] = useState<number>(0);

  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );

  const isTestLimiterValid =
    typeof testLimiterSelector === "number" && testLimiterSelector > 0;

  useEffect(() => {
    if (isTestLimiterValid) {
      setCountDown(testLimiterSelector);
    }
  }, [testLimiterSelector, isTestLimiterValid]);

  const startCountDown = () => {
    if (isTestLimiterValid) {
      setCountDownStatus("running");
    }
  };

  const resetCountDown = useCallback(() => {
    if (isTestLimiterValid) {
      setCountDown(testLimiterSelector);
      setCountDownStatus("idle");
    }
  }, [isTestLimiterValid, testLimiterSelector]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (countDownStatus === "running" && countDown > 0) {
        setCountDown((prev) => prev - 1);
      } else if (countDown === 0) {
        setCountDownStatus("finished");
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [countDown, countDownStatus]);

  useEffect(() => {
    if (countDown === 0) {
      setCountDownStatus("finished");
    }
  }, [countDown]);

  useEffect(() => {
    resetCountDown();
  }, [testModeSelector, resetCountDown]);

  return {
    countDownStatus,
    countDown,
    resetCountDown,
    startCountDown,
  };
};
