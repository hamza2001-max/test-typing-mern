import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type timeStatusType = "idle" | "running" | "finished";

interface useTimerInterface {
  countdown: number;
  startTimer: () => void;
  resetCountDown: () => void;
}

export const useTimer = (): useTimerInterface => {
  const [status, setStatus] = useState<timeStatusType>("idle");
  const [countdown, setCountdown] = useState(0);

  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );

  useEffect(() => {
    if (typeof testLimiterSelector === "number") {
      setCountdown(testLimiterSelector);
    }
  }, [testLimiterSelector]);

  const startTimer = () => {
    setStatus("running");
  };

  const resetCountDown= useCallback(() => {
    if (typeof testLimiterSelector === "number") {
      setCountdown(testLimiterSelector);
      setStatus("idle");
    }
  }, [testLimiterSelector]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (status === "running" && countdown > 0) {
      timerId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setStatus("finished");
    }
    return () => clearInterval(timerId);
  }, [countdown, status]);

  useEffect(() => {
    resetCountDown();
  }, [testModeSelector, resetCountDown]);

  return {
    countdown,
    resetCountDown,
    startTimer,
  };
};
