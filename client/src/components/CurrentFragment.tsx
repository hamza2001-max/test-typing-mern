import { CurrentFragmentInterface } from "../types";

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
                secondIndex === inputValue.length - 1 && (
                  <span
                    className={`absolute top-1 right-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
                  ></span>
                )}
              {secondIndex === inputValue.length && (
                <span
                  className={`absolute top-1 left-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
                ></span>
              )}
              {letter}
            </span>
          );
        })}
        {" "}
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
