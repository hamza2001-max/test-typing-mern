import { TypingInfoInterface } from "../../typescript/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
export const TypingInfo = ({
  countDown,
  inputValue,
  textWritten,
  testSentence,
}: TypingInfoInterface) => {
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );
  return (
    <>
      {(inputValue || textWritten) &&
        (testModeSelector === "time" ? (
          <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
            {countDown}
          </span>
        ) : (
          <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
            {textWritten.split(" ").length - 1}/{testSentence.split(" ").length}
          </span>
        ))}
    </>
  );
};
