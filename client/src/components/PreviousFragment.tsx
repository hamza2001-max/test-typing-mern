import { PreviousFragmentInterface } from "../types";
// import { RemainingLetters } from "./RemainingLetters";

export const PreviousFragment = ({
  word,
  writtenWord,
  inputValue,
}: PreviousFragmentInterface) => {
  let isWordUnderlined = false;
  console.log(writtenWord);
  console.log(word);

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
            isWordUnderlined && "border-b-3 border-custom-tertiary"
          }`}
        >
          {prevWords}
        </span>
        {writtenWord.length > word.length && (
          <span className="text-custom-tertiary border-b-3 border-custom-tertiary">{writtenWord.slice(word.length)}</span>
        )}
        {/* <RemainingLetters
        currentSentenceWord={currentSentenceWord}
        inputValue={inputValue}
      /> */}{" "}
      </>
    );
  } else {
    return <span>{word} </span>;
  }
};
