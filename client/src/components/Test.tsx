import { useCallback, useEffect, useRef, useState } from "react";
import { wordsJSON } from "../testJson";
import { VscDebugRestart } from "react-icons/vsc";
import { GiArrowCursor } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { WordChecker } from "./WordChecker";
import { inputStatusSlice } from "../redux/inputStatusSlice";
import { RootState } from "../redux/store";

export const Test = () => {
  const [testSentence, setTestSentence] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [textWritten, setTextWritten] = useState<string>("");
  const [scrollIndex, setScrollIndex] = useState(3);
  const [lineHeiInc, setLineHeiInc] = useState(1.25);
  const inputRef = useRef<HTMLInputElement>(null);

  const { inActive, active } = inputStatusSlice.actions;
  const inputStatusDispatch = useDispatch();

  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const inputStatusSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );
  const limiterPromptSelector = useSelector(
    (state: RootState) => state.promptValue.promptValue
  );

// console.log(inputStatusSelector);


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
    inputStatusDispatch(active());
    setScrollIndex(3);
    setLineHeiInc(1.25);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.disabled = false;
      inputRef.current?.focus();
    }
  }, [testSentenceCreator, active, inputStatusDispatch]);

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

  const handleInputBlur = () => {
    inputStatusDispatch(inActive());
    console.log('hello from blur');
    
  };

  const handleFocusClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('hello from focus');

    if (!inputStatusSelector) {
      inputRef.current?.focus();
      inputStatusDispatch(active());
    }
  };

  return (
    <section className="relative text-custom-primary flex items-center flex-col mt-5">
      <div className="w-72">
        <span className="text-custom-tertiary text-2xl ml-3">
          {textWritten.split(" ").length - 1}/{testSentence.split(" ").length}
        </span>
        <div className="relative flex justify-center">
          {!inputStatusSelector && (
            <div
              className="text-custom-secondary z-10 absolute w-full h-full backdrop-blur-sm flex justify-center items-center"
              onClick={handleFocusClick}
            >
              <GiArrowCursor className="text-lg mr-3" />
              Click here to focus
            </div>
          )}
          <WordChecker
            testSentence={testSentence}
            inputValue={inputValue}
            textWritten={textWritten}
            scrollIndex={scrollIndex}
            lineHeiInc={lineHeiInc}
            setScrollIndex={setScrollIndex}
            setLineHeiInc={setLineHeiInc}
            onClick={handleFocusClick}
          />
        </div>
        <input
          type="text"
          className="w-full mt-3 py-2 sr-only"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
        />
      </div>
      <button
        className="text-2xl flex justify-center mt-7 hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={handleRefresh}
      >
        <VscDebugRestart />
      </button>
    </section>
  );
};
