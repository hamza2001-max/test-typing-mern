import { useEffect, useRef } from "react";
import { ICurrentFragment } from "../../types";
import { Caret } from "./Caret";
import { useMediaQuery } from "react-responsive";
import { CurrentRemainingLetters } from "./CurrentRemainingLetters";
import { useRedux } from "../../hooks/useRedux";

export const CurrentFragment = ({
  inputValue,
  currentSentenceWord,
}: ICurrentFragment) => {
  let caretConstRef = useRef(14.38);
  const { isInputActiveSelector } = useRedux();
  const isBreakpointLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (isBreakpointLarge) {
      caretConstRef.current = 16.3;
    }
  }, [isBreakpointLarge]);

  return (
    <>
      <span className="relative">
        {isInputActiveSelector &&
          (currentSentenceWord.length + 5 >= inputValue.length ? (
            <Caret offset={caretConstRef.current * inputValue.length} />
          ) : (
            <Caret
              offset={caretConstRef.current * (currentSentenceWord.length + 5)}
            />
          ))}
        {currentSentenceWord.split("").map((letter, secondIndex) => {
          let currentClass = "";
          if (secondIndex <= inputValue.length - 1) {
            if (
              currentSentenceWord[secondIndex] ===
              inputValue[inputValue.length - 1]
            ) {
              if (secondIndex === inputValue.length - 1) {
                currentClass = "text-custom-secondary";
              } else {
                if (
                  currentSentenceWord[secondIndex] === inputValue[secondIndex]
                ) {
                  currentClass = "text-custom-secondary";
                } else {
                  currentClass = "text-custom-tertiary";
                }
              }
            } else {
              if (
                currentSentenceWord[secondIndex] === inputValue[secondIndex]
              ) {
                currentClass = "text-custom-secondary";
              } else {
                currentClass = "text-custom-tertiary";
              }
            }
          }
          return (
            <span key={secondIndex} className={`${currentClass}`}>
              {letter}
            </span>
          );
        })}
      </span>
      <CurrentRemainingLetters
        currentSentenceWord={currentSentenceWord}
        inputValue={inputValue}
      />{" "}
    </>
  );
};
