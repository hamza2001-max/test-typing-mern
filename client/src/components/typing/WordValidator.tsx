import { useEffect, useRef } from "react";
import { WordCheckerInterface } from "../../typescript/types";
import { CurrentFragment } from "./CurrentFragment";
import { PreviousFragment } from "./PreviousFragment";

export const WordValidator = ({
  textWritten,
  inputValue,
  testSentence,
  scrollIndex,
  lineHeiInc,
  setScrollIndex,
  setLineHeiInc,
}: WordCheckerInterface) => {
  const divRef = useRef<HTMLDivElement>(null);
  const typedSentenceRef = useRef<HTMLDivElement>(null);
  let currentSentenceWord = "";

  useEffect(() => {
    if (typedSentenceRef.current) {
      typedSentenceRef.current.scrollTop = 0;
    }
  }, [testSentence]);

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      const divHeight = divElement.offsetHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(divElement).lineHeight || "0"
      );
      const lines = Math.floor(divHeight / lineHeight);
      if (lines === scrollIndex) {
        if (typedSentenceRef.current) {
          typedSentenceRef.current.scrollTop = lineHeight * lineHeiInc;
          setScrollIndex((prev) => ++prev);
          setLineHeiInc((prev) => prev + 1.25);
        }
      }
    }
  }, [textWritten, lineHeiInc, scrollIndex, setScrollIndex, setLineHeiInc]);

  const typedSentence = testSentence.split(" ").map((word, firstIndex) => {
    const lastWordWrittenIndex = textWritten.split(" ").length - 1;
    currentSentenceWord = testSentence.split(" ")[lastWordWrittenIndex];
    if (firstIndex === lastWordWrittenIndex) {
      return (
        <CurrentFragment
          key={firstIndex}
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
    <>
      <div
        className="flex text-custom-primary text-2xl lg:text-custom-xl h-30 overflow-hidden"
        ref={typedSentenceRef}
      >
        <p className="leading-10 w-64 xs:w-80 sm:w-99 md:w-100 lg:w-101 xl:w-102">
          {typedSentence}
        </p>
      </div>
      <div
        className="text-2xl lg:text-custom-xl absolute opacity-0 -z-10"
        ref={divRef}
      >
        <p className="w-64 xs:w-80 sm:w-99 md:w-100 lg:w-101 xl:w-102 ">
          {testSentence
            .split(" ")
            .slice(0, textWritten.split(" ").length)
            .map((hiddenWord, index) => {
              return (
                <span key={index}>
                  <span key={index}>
                    {hiddenWord}
                    {textWritten.split(" ")[index].length >
                      hiddenWord.length && (
                      <span className="text-custom-tertiary border-b-3 border-custom-tertiary">
                        {textWritten
                          .split(" ")
                          [index].slice(
                            hiddenWord.length,
                            hiddenWord.length + 5
                          )}
                      </span>
                    )}
                  </span>{" "}
                </span>
              );
            })}
        </p>
      </div>
    </>
  );
};
