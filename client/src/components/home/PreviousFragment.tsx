import { IPreviousFragment } from "../../types";
import { PreviousRemainingLetter } from "./PreviousRemainingLetter";

export const PreviousFragment = ({
  word,
  writtenWord,
  inputValue,
}: IPreviousFragment) => {
  let isWordUnderlined = false;

  if (writtenWord) {
    const prevWords = word.split("").map((letter, thirdIndex) => {
      let prevClass = "";
      if (thirdIndex <= word.length - 1) {
        if (writtenWord[thirdIndex] === word[thirdIndex]) {
          if (thirdIndex === inputValue.length - 1) {
            prevClass = "text-custom-secondary";
          } else {
            if (writtenWord[thirdIndex] === word[thirdIndex]) {
              prevClass = "text-custom-secondary";
            } else {
              prevClass = "text-custom-tertiary";
              isWordUnderlined = true;
            }
          }
        } else {
          if (writtenWord[thirdIndex] === word[thirdIndex]) {
            prevClass = "text-custom-secondary";
          } else {
            prevClass = "text-custom-tertiary";
            isWordUnderlined = true;
          }
        }
      }
      return (
        <span className={`${prevClass}`} key={thirdIndex}>
          {letter}
        </span>
      );
    });

    return (
      <>
        <span
          className={`${
            isWordUnderlined && "border-b-2 border-custom-tertiary"
          }`}
        >
          {prevWords}
        </span>
        {writtenWord.length > word.length && (
          <PreviousRemainingLetter writtenWord={writtenWord} word={word} />
        )}{" "}
      </>
    );
  } else {
    return <span>{word} </span>;
  }
};
