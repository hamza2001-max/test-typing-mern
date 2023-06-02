import { CurrentFragmentInterface } from "../types";
import { Caret } from "./Caret";

export const CurrentFragment = ({
  word,
  inputValue,
  currentSentenceWord,
}: CurrentFragmentInterface) => {
  return (
    <span className="relative">
      {currentSentenceWord.length - 1 >= inputValue.length ? (
        <Caret offset={14 * inputValue.length || 0} />
      ) : (
        <Caret offset={14 * currentSentenceWord.length} />
      )}
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
            if (currentSentenceWord[secondIndex] === inputValue[secondIndex]) {
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
      })}{" "}
    </span>
  );
};
