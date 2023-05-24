import { WordCheckerInterface } from "../types";
import { CurrentFragment } from "./CurrentFragment";
import { PreviousFragment } from "./PreviousFragment";

export const WordChecker = ({
  textWritten,
  inputRef,
  inputValue,
  testSentence,
}: WordCheckerInterface) => {
  const typedSentence = testSentence.split(" ").map((word, firstIndex) => {
    const lastWordWrittenIndex = textWritten.split(" ").length - 1;
    const currentSentenceWord = testSentence.split(" ")[lastWordWrittenIndex];
    if (firstIndex === lastWordWrittenIndex) {
      return (
        <CurrentFragment
          key={firstIndex}
          word={word}
          inputValue={inputValue}
          currentSentenceWord={currentSentenceWord}
        />
      );
    } else {
      const writtenWord = textWritten.split(" ")[firstIndex];
      return (
        <PreviousFragment
          key={firstIndex}
          word={word}
          writtenWord={writtenWord}
          inputValue={inputValue}
        />
      );
    }
  });

  return (
    <section
      className="flex text-custom-primary text-2xl"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <p className=" w-64 break-words">{typedSentence}</p>
    </section>
  );
};
