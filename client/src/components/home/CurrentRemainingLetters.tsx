import { useEffect, useState } from "react";
import { CurrentRemainingLettersInterface } from "../../typescript/types";

export const CurrentRemainingLetters = ({
  currentSentenceWord,
  inputValue,
}: CurrentRemainingLettersInterface) => {
  const [remainingLetters, setRemainingLetters] = useState<string>("");

  useEffect(() => {
    if (inputValue.length > currentSentenceWord.length) {
      setRemainingLetters(
        inputValue.slice(
          currentSentenceWord.length,
          currentSentenceWord.length + 5
        )
      );
    } else {
      setRemainingLetters("");
    }
  }, [currentSentenceWord, inputValue]);
  return <span className="text-custom-tertiary">{remainingLetters}</span>;
};
