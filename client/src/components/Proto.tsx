import { useEffect, useRef, useState } from "react";
import { wordsJSON } from "../testJson";
import { VscDebugRestart } from "react-icons/vsc";

interface ProtoSentenceInterface {
  inputValue: string;
  textWritten: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
let prototypeSentence = wordsJSON
  .slice(0, 5)
  .map((word) => word.word)
  .join(" ");

const ProtoSentence = ({
  textWritten,
  inputRef,
  inputValue,
}: ProtoSentenceInterface) => {
  const newTestSentence = prototypeSentence
    .split(" ")
    .map((word, firstIndex) => {
      const lastWordWrittenIndex = textWritten.split(" ").length - 1;
      const currentSentenceWord =
        prototypeSentence.split(" ")[lastWordWrittenIndex];
      if (firstIndex === lastWordWrittenIndex) {
        return (
          <span key={firstIndex} className="flex">
            {word.split("").map((letter, secondIndex) => {
              let currentClass = "";
              if (secondIndex <= inputValue.length - 1) {
                if (
                  currentSentenceWord.split("")[secondIndex] ===
                  inputValue.split("")[inputValue.length - 1]
                ) {
                  if (secondIndex === inputValue.length - 1) {
                    currentClass = "text-custom-secondary";
                  } else {
                    if (
                      currentSentenceWord.split("")[secondIndex] ===
                      inputValue.split("")[secondIndex]
                    ) {
                      currentClass = "text-custom-secondary";
                    } else {
                      currentClass = "text-custom-tertiary";
                    }
                  }
                } else {
                  if (
                    currentSentenceWord.split("")[secondIndex] ===
                    inputValue.split("")[secondIndex]
                  ) {
                    currentClass = "text-custom-secondary";
                  } else {
                    currentClass = "text-custom-tertiary";
                  }
                }
              }
              return (
                <span key={secondIndex} className="relative flex">
                  {currentSentenceWord.length === inputValue.length &&
                    secondIndex === inputValue.length - 1 && (
                      <div
                        className={`absolute top-1 right-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
                      ></div>
                    )}
                  {secondIndex === inputValue.length && (
                    <div
                      className={`absolute top-1 left-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
                    ></div>
                  )}
                  <span className={currentClass}>{letter}</span>
                </span>
              );
            })}
            &nbsp;
          </span>
        );
      } else {
        const writtenWord = textWritten.split(" ")[firstIndex];
        if (writtenWord) {
          return (
            <span key={firstIndex}>
              {word.split("").map((letter, thirdIndex) => {
                let prevClass = "";
                if (thirdIndex <= word.length - 1) {
                  if (
                    writtenWord.split("")[thirdIndex] ===
                    word.split("")[thirdIndex]
                  ) {
                    if (thirdIndex === inputValue.length - 1) {
                      prevClass = "text-custom-secondary";
                    } else {
                      if (
                        writtenWord.split("")[thirdIndex] ===
                        word.split("")[thirdIndex]
                      ) {
                        prevClass = "text-custom-secondary";
                      } else {
                        prevClass = "text-custom-tertiary";
                      }
                    }
                  } else {
                    if (
                      writtenWord.split("")[thirdIndex] ===
                      word.split("")[thirdIndex]
                    ) {
                      prevClass = "text-custom-secondary";
                    } else {
                      prevClass = "text-custom-tertiary";
                    }
                  }
                }
                return (
                  <span className={prevClass} key={thirdIndex}>
                    {letter}
                  </span>
                );
              })}
              &nbsp;
            </span>
          );
        } else {
          return <span key={firstIndex}>{word}&nbsp;</span>;
        }
      }
    });
  return (
    <section
      className="flex text-custom-primary text-2xl"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      {newTestSentence}
    </section>
  );
};

export const Proto = () => {
  const [inputValue, setInputValue] = useState("");
  const [textWritten, setTextWritten] = useState("");
  // const [wordIndex, setWordIndex] = useState(0);
  // const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);
  console.log(textWritten);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleRefresh = () => {
    setTextWritten("");
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.disabled = false;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      // setWordIndex((prev) => ++prev);
      setTextWritten((prev) => prev + inputValue + " ");
      setInputValue("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      if (
        textWritten.split(" ").length - 1 ===
        prototypeSentence.split(" ").length - 1
        // (textWritten.split(" ")[textWritten.split(" ").length - 1] ===
        //   prototypeSentence.split(" ")[prototypeSentence.split(" ").length - 1])
      ) {
        if (inputRef.current) {
          inputRef.current.disabled = true;
        }
      }
    }
  };

  return (
    <section className="relative ">
      <ProtoSentence
        inputValue={inputValue}
        textWritten={textWritten}
        inputRef={inputRef}
      />
      <input
        type="text"
        className="w-full mt-3 py-2 sr-only"
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-2xl w-full flex justify-center mt-10 hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={handleRefresh}
      >
        <VscDebugRestart />
      </button>
    </section>
  );
};
