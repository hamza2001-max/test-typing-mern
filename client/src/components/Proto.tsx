import { useRef, useState } from "react";
import { wordsJSON } from "../testJson";

interface wordBlockInterface {
  word: string;
  incorrectWordIndices: string[];
  setIncorrectWordIndices: React.Dispatch<React.SetStateAction<string[]>>;
}

const WordBlock = ({
  word,
  incorrectWordIndices,
  setIncorrectWordIndices,
}: wordBlockInterface) => {
  // if (inputValue.length > 0) {
  //   if (word[inputValueIndex] === inputValue[inputValueIndex]) {
  //     console.log("correct");
  //   } else {
  //     console.log("wrong");
  //   }
  // }
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const wordIndexRef = useRef<number>(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.length === 0) {
      if (event.key === " ") {
        event.preventDefault();
      }
    } else if (event.key === " ") {
      event.preventDefault();
      if (word !== inputValue) {
        setIncorrectWordIndices((prev) => [...prev, word]);
      }
      if (inputRef.current) {
        inputRef.current.disabled = true;
        const nextInput = inputRef.current
          .nextElementSibling as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="bg-transparent border border-black focus:outline-none"
        // placeholder={word}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        style={{ width: `${document.querySelector("h1")?.offsetWidth}px` }}
      />
    </>
  );
};

export const Proto = () => {
  // const [incorrectWord, setIncorrectWord] = useState(false);
  // const [incorrectLetter, setIncorrectLetter] = useState(false);
  const [incorrectWordIndices, setIncorrectWordIndices] = useState<string[]>(
    []
  );

  console.log(incorrectWordIndices);

  let prototypeSentence = wordsJSON
    .slice(0, 5)
    .map((word) => word.word)
    .join(" ");

  return (
    <section className="relative">
      <h1 className="text-custom-primary space-x-2">
        {prototypeSentence.split(" ").map((word, index) => {
          return (
            <span
              className={`${
                incorrectWordIndices.includes(word) &&
                "tailUnderline underline-offset-4 pb-1"
              }`}
              key={index}
            >
              {word}
            </span>
          );
        })}
      </h1>
      <div className="absolute top-0 left-0 flex space-x-2">
        {prototypeSentence.split(" ").map((word, index) => {
          return (
            <WordBlock
              word={word}
              incorrectWordIndices={incorrectWordIndices}
              // setIncorrectWord={setIncorrectWord}
              setIncorrectWordIndices={setIncorrectWordIndices}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};
