import { useEffect, useRef, useState } from "react";
import { wordsJSON } from "../testJson";

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
  const newTestSentence = prototypeSentence.split(" ").map((word, index1) => {
    const lastWordWrittenIndex = textWritten.split(" ").length - 1;
    const currentProtoWord = prototypeSentence.split(" ")[lastWordWrittenIndex];
    if (index1 === lastWordWrittenIndex) {
      return (
        <span key={index1}>
          {word.split("").map((letter, index2) => {
            let sColorClass = "";
            if (index2 <= inputValue.length - 1) {
              if (
                currentProtoWord.split("")[index2] ===
                inputValue.split("")[inputValue.length - 1]
              ) {
                if (index2 === inputValue.length - 1) {
                  sColorClass = "text-custom-secondary";
                } else {
                  if (
                    currentProtoWord.split("")[index2] ===
                    inputValue.split("")[index2]
                  ) {
                    sColorClass = "text-custom-secondary";
                  } else {
                    sColorClass = "text-custom-tertiary";
                  }
                }
              } else {
                if (
                  currentProtoWord.split("")[index2] ===
                  inputValue.split("")[index2]
                ) {
                  sColorClass = "text-custom-secondary";
                } else {
                  sColorClass = "text-custom-tertiary";
                }
              }
            }
            return (
              <span key={index2} className={sColorClass}>
                {letter}
              </span>
            );
          })}
          &nbsp;
        </span>
      );
    } else {
      const writtenWord = textWritten.split(" ")[index1];
      if (writtenWord) {
        return (
          <span key={index1}>
            {word.split("").map((letter, index3) => {
              let sColorClass = "";
              if (index3 <= word.length - 1) {
                if (writtenWord.split("")[index3] === word.split("")[index3]) {
                  if (index3 === inputValue.length - 1) {
                    sColorClass = "text-custom-secondary";
                  } else {
                    if (
                      writtenWord.split("")[index3] === word.split("")[index3]
                    ) {
                      sColorClass = "text-custom-secondary";
                    } else {
                      sColorClass = "text-custom-tertiary";
                    }
                  }
                } else {
                  if (
                    writtenWord.split("")[index3] === word.split("")[index3]
                  ) {
                    sColorClass = "text-custom-secondary";
                  } else {
                    sColorClass = "text-custom-tertiary";
                  }
                }
              }
              return <span className={sColorClass}>{letter}</span>;
            })}
            &nbsp;
          </span>
        );
      } else {
        return <span>{word}&nbsp;</span>;
      }
    }
  });
  return (
    <section
      className="text-custom-primary text-2xl"
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
  const [wordIndex, setWordIndex] = useState(0);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      if (inputValue === prototypeSentence.split(" ")[wordIndex]) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      setWordIndex((prev) => ++prev);
      setTextWritten((prev) => prev + inputValue + " ");
      setInputValue("");
      if (inputRef.current) {
        inputRef.current.value = "";
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
      {/* <div
        className={`absolute top-2 left-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
      ></div> */}
      <input
        type="text"
        className="w-full mt-3 py-2 sr-only"
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </section>
  );
};
