import { PreviousRemainingLettersInterface } from "../../typescript/types"

export const PreviousRemainingLetter = ({writtenWord, word}:PreviousRemainingLettersInterface) => {
  return (
    <span className="text-custom-tertiary border-b-3 border-custom-tertiary">
    {writtenWord.slice(word.length, word.length+5)}
  </span>
  )
}
