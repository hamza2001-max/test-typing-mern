import { useRef, useState } from "react";
import { wordsJSON } from "../testJson";

// interface wordBlockInterface {
//   word: string;
//   incorrectWordIndices: string[];
//   setIncorrectWordIndices: React.Dispatch<React.SetStateAction<string[]>>;
// }

// const WordBlock = ({
//   word,
//   incorrectWordIndices,
//   setIncorrectWordIndices,
// }: wordBlockInterface) => {
//   const [inputValue, setInputValue] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const wordIndexRef = useRef<number>(0);

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (inputValue.length === 0) {
//       if (event.key === " ") {
//         event.preventDefault();
//       }
//     } else if (event.key === " ") {
//       event.preventDefault();
//       if (word !== inputValue) {
//         setIncorrectWordIndices((prev) => [...prev, word]);
//       }
//       if (inputRef.current) {
//         inputRef.current.disabled = true;
//         const nextInput = inputRef.current
//           .nextElementSibling as HTMLInputElement;
//         nextInput?.focus();
//       }
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         className="bg-transparent border border-black focus:outline-none"
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         ref={inputRef}
//         style={{ width: `${document.querySelector("h1")?.offsetWidth}px` }}
//       />
//     </>
//   );
// };

export const Proto = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  let prototypeSentence = wordsJSON
    .slice(0, 5)
    .map((word) => word.word)
    .join(" ");

  console.log(inputValue);

  const [caretPosition, setCaretPosition] = useState(0);
  return (
    <section className="relative">
      <h1
        className="text-custom-primary space-x-2"
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        {prototypeSentence}
      </h1>
      <div className="absolute top-1 left-0 w-0.1 h-5 rounded-sm bg-custom-secondary transition duration-200 caret"></div>
      <input
        type="text"
        className="w-full mt-3 py-2 sr-only"
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </section>
  );
};
