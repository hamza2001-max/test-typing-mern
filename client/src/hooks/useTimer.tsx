import { useEffect, useState } from "react";

interface val {
  initialCount: number;
}
type timeStatusType = "idle" | "running" | "paused" | "finished";

export const useTimer = ({ initialCount }: val) => {
  const [countdown, setCountdown] = useState(initialCount);
  const [status, setStatus] = useState<timeStatusType>("idle");

  const startTimer = () => {
    setStatus("running");
  };

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
  }, []);

  return {
    countdown,
    startTimer,
  };
};
