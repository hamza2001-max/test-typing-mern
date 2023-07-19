import { useEffect } from "react";
import { TypingInfoInterface } from "../../typescript/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTimer } from "../../hooks/useTimer";
export const TypingInfo = ({
  inputValue,
  textWritten,
  testSentence,
  resetTimer,
  setResetTimer,
}: TypingInfoInterface) => {
  const { countdown, startTimer, resetCountDown } = useTimer();
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );

  useEffect(() => {
    if (resetTimer) {
      resetCountDown();
      setResetTimer(false);
    }
    if (inputValue) {
      startTimer();
    }
  }, [inputValue, startTimer, resetCountDown, resetTimer, setResetTimer]);

  return (
    <>
      {(inputValue || textWritten) &&
        (testModeSelector === "time" ? (
          <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
            {countdown}
          </span>
        ) : (
          <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
            {textWritten.split(" ").length - 1}/{testSentence.split(" ").length}
          </span>
        ))}
    </>
  );
};
