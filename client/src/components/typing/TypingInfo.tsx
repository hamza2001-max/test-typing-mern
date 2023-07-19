import { useEffect, useState } from "react";
import { TypingInfoInterface } from "../../typescript/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTimer } from "../../hooks/useTimer";
export const TypingInfo = ({
  initialCount,
  inputValue,
  textWritten,
  testSentence,
}: TypingInfoInterface) => {
  
  
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
    );
    const testLimiterSelector = useSelector(
      (state: RootState) => state.testLimiter.testLimiter
      );
      const {countdown}= useTimer(typeof testLimiterSelector === "number" && testLimiterSelector);

  return (
    <>
      {testModeSelector === "time"
        ? typeof testLimiterSelector === "number" && (
            <span>{countdown}</span>
          )
        : (inputValue || textWritten) && (
            <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
              {textWritten.split(" ").length - 1}/
              {testSentence.split(" ").length}
            </span>
          )}
    </>
  );
};
