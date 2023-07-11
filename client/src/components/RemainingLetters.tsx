import { useEffect, useState } from "react";
import { RemainingLettersInterface } from "../typescript/types";

export const RemainingLetters = ({
  currentSentenceWord,
  inputValue,
}: RemainingLettersInterface) => {
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
