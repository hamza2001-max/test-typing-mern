import { ITypingInfo } from "../../types";
import { useRedux } from "../../hooks/useRedux";
export const MainFrameProgress = ({
  countDown,
  inputValue,
  textWritten,
  testSentence,
}: ITypingInfo) => {
  const { testFrameSelector } = useRedux();
  return (
    <>
      {(inputValue || textWritten) && (
        <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
          {testFrameSelector === "time"
            ? countDown
            : `${textWritten.split(" ").length - 1}/${
                testSentence.split(" ").length
              }`}
        </span>
      )}
    </>
  );
};
