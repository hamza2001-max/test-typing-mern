import { useEffect, useState } from "react";

interface RemainingLettersInterface {
  currentSentenceWord: string;
  inputValue: string;
}

export const RemainingLetters = ({
  currentSentenceWord,
  inputValue,
}: RemainingLettersInterface) => {
  const [remainingLetters, setRemainingLetters] = useState<string>("");

  useEffect(() => {
    if (inputValue.length > currentSentenceWord.length) {
      setRemainingLetters(inputValue.slice(currentSentenceWord.length, currentSentenceWord.length+5));
    } else {
      setRemainingLetters("");
    }
  }, [currentSentenceWord, inputValue]);
  return <span className="text-custom-tertiary">{remainingLetters}</span>;
};
