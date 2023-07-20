import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type timeStatusType = "idle" | "running" | "finished";

interface useTimerInterface {
  countDown: number;
  startCountDown: () => void;
  resetCountDown: () => void;
}

export const useTimer = (): useTimerInterface => {
  const [status, setStatus] = useState<timeStatusType>("idle");
  const [countDown, setCountDown] = useState(0);

  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );

  useEffect(() => {
    if (typeof testLimiterSelector === "number") {
      setCountDown(testLimiterSelector);
    }
  }, [testLimiterSelector]);

  const startCountDown = () => {
    setStatus("running");
  };

  const resetCountDown= useCallback(() => {
    if (typeof testLimiterSelector === "number") {
      setCountDown(testLimiterSelector);
      setStatus("idle");
    }
  }, [testLimiterSelector]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (status === "running" && countDown > 0) {
      timerId = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    } else if (countDown === 0) {
      setStatus("finished");
    }
    return () => clearInterval(timerId);
  }, [countDown, status]);

  useEffect(() => {
    resetCountDown();
  }, [testModeSelector, resetCountDown]);

  return {
    countDown,
    resetCountDown,
    startCountDown,
  };
};
