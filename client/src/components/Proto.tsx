import { useCallback, useEffect, useRef, useState } from "react";
import { wordsJSON } from "../testJson";
import { VscDebugRestart } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { customPromptVSlice } from "../redux/visibilitySlice";
import { customPromptVSInterface } from "../types";
import { TestModeWordsPrompt } from "./TestModeWordsPrompt";

interface ProtoSentenceInterface {
  inputValue: string;
  testSentence: string;
  textWritten: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const ProtoSentence = ({
  textWritten,
  inputRef,
  inputValue,
  testSentence,
}: ProtoSentenceInterface) => {
  const newTestSentence = testSentence.split(" ").map((word, firstIndex) => {
    const lastWordWrittenIndex = textWritten.split(" ").length - 1;
    const currentSentenceWord = testSentence.split(" ")[lastWordWrittenIndex];
    if (firstIndex === lastWordWrittenIndex) {
      return (
        <span key={firstIndex}>
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
              <span key={secondIndex} className={`${currentClass} relative`}>
                {currentSentenceWord.length === inputValue.length &&
                  secondIndex === inputValue.length - 1 && (
                    <span
                      className={`absolute top-1 right-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
                    ></span>
                  )}
                {secondIndex === inputValue.length && (
                  <span
                    className={`absolute top-1 left-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition duration-200 caret`}
                  ></span>
                )}
                  {letter}
              </span>
            );
          })}
          &nbsp;
        </span>
      );
    } else {
      const writtenWord = textWritten.split(" ")[firstIndex];
      let wordContainsUnderline = false;
      if (writtenWord) {
        const prevWords = word.split("").map((letter, thirdIndex) => {
          let prevClass = "";
          if (thirdIndex <= word.length - 1) {
            if (
              writtenWord.split("")[thirdIndex] === word.split("")[thirdIndex]
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
                  wordContainsUnderline = true;
                }
              }
            } else {
              if (
                writtenWord.split("")[thirdIndex] === word.split("")[thirdIndex]
              ) {
                prevClass = "text-custom-secondary";
              } else {
                prevClass = "text-custom-tertiary";
                wordContainsUnderline = true;
              }
            }
          }
          return (
            <span className={`${prevClass}`} key={thirdIndex}>
              {letter}
            </span>
          );
        });

        return (
          <span key={firstIndex}>
            <span
              key={firstIndex}
              className={`${
                wordContainsUnderline && "border-b-3 border-custom-tertiary"
              }`}
            >
              {prevWords}
            </span>
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
      className=" flex text-custom-primary text-2xl"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <p className=" w-64 whitespace-normal break-words bg-amber-300">{newTestSentence}</p>
    </section>
  );
};

export const Proto = () => {
  const [testSentence, setTestSentence] = useState<string>("hamzaAli");
  const [inputValue, setInputValue] = useState<string>("");
  const [textWritten, setTextWritten] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const customPromptVDispatch = useDispatch();
  const { visibleCustom } = customPromptVSlice.actions;

  const testLimiterSelector = useSelector(
    (state: { testLimiter: { testLimiter: string } }) =>
      state.testLimiter.testLimiter
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    testSentenceCreator();
  }, [testLimiterSelector]);

  useEffect(() => {
    const handleInputChange = () => {
      if (typeof inputRef.current?.value === "string") {
        setInputValue(inputRef.current?.value);
      }
    };

    inputRef.current?.addEventListener("input", handleInputChange);

    return () => {
      inputRef.current?.removeEventListener("input", handleInputChange);
    };
  }, []);

  useEffect(() => {
    if (
      textWritten.split(" ").length - 1 ===
      testSentence.split(" ").length - 1
    ) {
      if (
        inputValue.trim() ===
        testSentence.split(" ")[testSentence.split(" ").length - 1].trim()
      ) {
        if (inputRef.current) {
          inputRef.current.disabled = true;
        }
      }
    }
  }, [inputValue, textWritten, testSentence]);

  const handleRefresh = useCallback(() => {
    testSentenceCreator();
    setTextWritten("");
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.disabled = false;
      inputRef.current?.focus();
    }
  }, []);

  const testSentenceCreator = useCallback(() => {
    let prototypeSentence = "";
    if (typeof testLimiterSelector === "number") {
      for (let i = 0; i < testLimiterSelector; i++) {
        const randomWord =
          wordsJSON[Math.floor(Math.random() * wordsJSON.length)].word;
        prototypeSentence +=
          i === testLimiterSelector - 1 ? randomWord : randomWord + " ";
      }
      setTestSentence(prototypeSentence);
    }
    if (typeof testLimiterSelector === "string") {
      customPromptVDispatch(visibleCustom());
    }
  }, [testLimiterSelector]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === " ") {
        e.preventDefault();
        setTextWritten((prev) => prev + inputValue + " ");
        setInputValue("");
        if (textWritten.split(" ").length === testSentence.split(" ").length) {
          if (inputRef.current) {
            inputRef.current.disabled = true;
          }
        }
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    },
    [inputValue, textWritten, testSentence]
  );

  return (
    <section className="relative text-custom-primary">
      <ProtoSentence
        testSentence={testSentence}
        inputValue={inputValue}
        textWritten={textWritten}
        inputRef={inputRef}
      />
      <input
        type="text"
        className="w-full mt-3 py-2"
        ref={inputRef}
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
