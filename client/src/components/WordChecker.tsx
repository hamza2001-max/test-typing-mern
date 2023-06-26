import { useEffect, useRef } from "react";
import { WordCheckerInterface } from "../types";
import { CurrentFragment } from "./CurrentFragment";
import { PreviousFragment } from "./PreviousFragment";

export const WordChecker = ({
  textWritten,
  inputValue,
  testSentence,
  scrollIndex,
  lineHeiInc,
  setScrollIndex,
  setLineHeiInc,
  onClick,
}: WordCheckerInterface) => {
  const divRef = useRef<HTMLDivElement>(null);
  const typedSentenceRef = useRef<HTMLDivElement>(null);

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
    <>
      <div
        className="flex text-custom-primary text-2xl lg:text-custom-xl h-30 overflow-hidden"
        onClick={onClick}
        ref={typedSentenceRef}
      >
        <p className="leading-10 w-64 xs:w-80 sm:w-99 md:w-100 lg:w-101 xl:w-102">{typedSentence}</p>
      </div>
      <div className="text-2xl lg:text-custom-xl absolute opacity-0 -z-10" ref={divRef}>
        <p className="w-64 xs:w-80 sm:w-99 md:w-100 lg:w-101 xl:w-102">
          {testSentence
            .split(" ")
            .slice(0, textWritten.split(" ").length)
            .map((hiddenWord) => hiddenWord)
            .join(" ")}
        </p>
      </div>
    </>
  );
};