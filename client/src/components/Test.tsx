import { useCallback, useEffect, useRef, useState } from "react";
import { wordsJSON } from "../testJson";
import { VscDebugRestart } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { WordChecker } from "./WordChecker";
import { promptValueInterface } from "../types";

export const Test = () => {
  const [testSentence, setTestSentence] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [textWritten, setTextWritten] = useState<string>("");
  const [scrollIndex, setScrollIndex] = useState(3);
  const [lineHeiInc, setLineHeiInc] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const testLimiterSelector = useSelector(
    (state: { testLimiter: { testLimiter: string } }) =>
      state.testLimiter.testLimiter
  );
  const limiterPromptSelector = useSelector(
    (state: promptValueInterface) => state.promptValue.promptValue
  );


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
      inputRef.current.disabled = false;
    }
    
    const handleInputChange = () => {
      if (typeof inputRef.current?.value === "string") {
        setInputValue(inputRef.current?.value);
      }
    };

    const inputElement = inputRef.current;
    inputElement?.addEventListener("input", handleInputChange);
    return () => {
      inputElement?.removeEventListener("input", handleInputChange);
    };
  });

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
      console.log(limiterPromptSelector);
      for (let i = 0; i < limiterPromptSelector; i++) {
        const randomWord =
          wordsJSON[Math.floor(Math.random() * wordsJSON.length)].word;
        prototypeSentence +=
          i === limiterPromptSelector - 1 ? randomWord : randomWord + " ";
      }
      setTestSentence(prototypeSentence);
    }
  }, [testLimiterSelector, limiterPromptSelector]);

  const handleRefresh = useCallback(() => {
    testSentenceCreator();
    setTextWritten("");
    setInputValue("");
    setScrollIndex(3);
    setLineHeiInc(1);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.disabled = false;
      inputRef.current?.focus();
    }
  }, [testSentenceCreator]);

  useEffect(() => {
    testSentenceCreator();
  }, [testLimiterSelector, testSentenceCreator]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === " ") {
        if (inputValue.trim() === "") {
          e.preventDefault();
        } else {
          e.preventDefault();
          setTextWritten((prev) => prev + inputValue + " ");
          setInputValue("");
          if (
            textWritten.split(" ").length === testSentence.split(" ").length
          ) {
            if (inputRef.current) {
              inputRef.current.disabled = true;
            }
          }
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }
      }
    },
    [inputValue, textWritten, testSentence]
  );

  return (
    <section className="text-custom-primary flex justify-center items-center flex-col mt-5">
      {/* {!isInputFocused && (
          <div
            className="z-10 absolute w-full h-full backdrop-blur-sm"
            onClick={() => {
              setIsInputFocused(true);
            }}
          ></div>
        )} */}
      <WordChecker
        testSentence={testSentence}
        inputValue={inputValue}
        textWritten={textWritten}
        inputRef={inputRef}
        scrollIndex={scrollIndex}
        lineHeiInc={lineHeiInc}
        setScrollIndex={setScrollIndex}
        setLineHeiInc={setLineHeiInc}
      />
      <input
        type="text"
        className="w-full mt-3 py-2 sr-only"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-2xl flex justify-center mt-7 hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={handleRefresh}
      >
        <VscDebugRestart />
      </button>
    </section>
  );
};
