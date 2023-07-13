import { useSelector } from "react-redux";
import { CurrentFragmentInterface } from "../../typescript/types";
import { Caret } from "./Caret";
import { RootState } from "../../redux/store";
import { useMediaQuery } from "react-responsive";
import { CurrentRemainingLetters } from "./CurrentRemainingLetters";

export const CurrentFragment = ({
  inputValue,
  currentSentenceWord,
}: CurrentFragmentInterface) => {
  let constant = 14.38;
  const isBreakpointLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isInputActiveSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );

  if (isBreakpointLarge) {
    constant = 16.3;
  }

  return (
    <>
      <span className="relative">
        {isInputActiveSelector &&
          (currentSentenceWord.length + 5 >= inputValue.length ? (
            <Caret offset={constant * inputValue.length} />
          ) : (
            <Caret
              offset={
                constant * (currentSentenceWord.length +5)
              }
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
