import { TypingInfoInterface } from "../../typescript/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
export const MainFrameProgress = ({
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
      {(inputValue || textWritten) && (
        <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
          {testModeSelector === "time"
            ? countDown
            : `${textWritten.split(" ").length - 1}/${testSentence.split(" ").length}`}
        </span>
      )}
    </>
  );
  
};
