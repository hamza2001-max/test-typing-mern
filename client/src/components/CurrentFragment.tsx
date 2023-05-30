import { CurrentFragmentInterface } from "../types";
import { Caret, CaretEnd } from "./Caret";

export const CurrentFragment = ({
  word,
  inputValue,
  currentSentenceWord,
}: CurrentFragmentInterface) => {
  // let extraLetters = "";

  return (
    <>
      <span>
        {word.split("").map((letter, secondIndex) => {
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
            <span key={secondIndex} className={`${currentClass} relative`}>
              {currentSentenceWord.length === inputValue.length &&
                secondIndex === inputValue.length - 1 && <CaretEnd />}
              {secondIndex === inputValue.length && <Caret />}
              {letter}
            </span>
          );
        })}{" "}
        {/* {extraLetters} */}
      </span>
      {/* {inputValue.length > word.length && (
        <>
          {(extraLetters += inputValue[inputValue.length - 1])}
        </>
      )}{" "} */}
    </>
  );
};
