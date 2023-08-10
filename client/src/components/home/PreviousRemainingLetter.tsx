import { IPreviousRemainingLetters } from "../../types"

export const PreviousRemainingLetter = ({writtenWord, word}:IPreviousRemainingLetters) => {
  return (
    <span className="text-custom-tertiary border-b-3 border-custom-tertiary">
    {writtenWord.slice(word.length, word.length+5)}
  </span>
  )
}
