import { useEffect, useState } from "react";
import { ICurrentRemainingLetters } from "../../types";

export const CurrentRemainingLetters = ({
  currentSentenceWord,
  inputValue,
}: ICurrentRemainingLetters) => {
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
