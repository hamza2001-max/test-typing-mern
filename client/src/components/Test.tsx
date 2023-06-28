import { useCallback, useEffect, useRef, useState } from "react";
import { punctuationsJSON, wordsJSON } from "../testJson";
import { VscDebugRestart } from "react-icons/vsc";
import { GiArrowCursor } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { WordValidator } from "./WordValidator";
import { inputStatusSlice } from "../redux/inputStatusSlice";
import { RootState } from "../redux/store";

export const Test = () => {
  const [testSentence, setTestSentence] = useState<string>("");
  const [textWritten, setTextWritten] = useState<string>("");
  const [scrollIndex, setScrollIndex] = useState<number>(3);
  const [inputValue, setInputValue] = useState<string>("");
  const [lineHeiInc, setLineHeiInc] = useState<number>(1.25);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { inActive, active } = inputStatusSlice.actions;
  const inputStatusDispatch = useDispatch();
  // const { testLimiter, isInputActive, promptValue, testModifier  } = useSelector(
  //   (state: RootState) => state
  // );
  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const isInputActiveSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );
  const promptValueSelector = useSelector(
    (state: RootState) => state.promptValue.promptValue
  );
  const testModifierSelector = useSelector(
    (state: RootState) => state.testModifier.testModifier
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

    const handleBtnKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        btnRef.current?.focus();
      }
    };
    const inputElement = inputRef.current;
    inputElement?.addEventListener("input", handleInputChange);
    document.addEventListener("keydown", handleBtnKeyDown);
    return () => {
      inputElement?.removeEventListener("input", handleInputChange);
      document.removeEventListener("keydown", handleBtnKeyDown);
    };
  });

  useEffect(() => {
    if (textWritten.split(" ").length - 1 === testSentence.split(" ").length) {
      if (inputRef.current) {
        inputRef.current.disabled = true;
      }
    }
  }, [inputValue, textWritten, testSentence]);

  const generateTestSentence = useCallback(() => {
    const generateRandomNumber = (max: number) =>
      Math.floor(Math.random() * max);
    const getRandomWord = () =>
      wordsJSON[generateRandomNumber(wordsJSON.length)].word;
    const getRandomPunctuation = () =>
      punctuationsJSON[generateRandomNumber(punctuationsJSON.length)]
        .punctuation;

    let prototypeSentence = "";
    let randomWord = "";

    const generateRandomWord = () => {
      randomWord = getRandomWord();
      const shouldAddPunctuation =
        testModifierSelector === "punctuation" &&
        generateRandomNumber(10) === 3;
      const shouldAddNumber =
        testModifierSelector === "numbers" && generateRandomNumber(10) === 3;
      const shouldAddDual =
        testModifierSelector === "dual" && generateRandomNumber(10) === 3;

      if (shouldAddPunctuation) {
        randomWord = randomWord.concat(getRandomPunctuation());
      } else if (shouldAddNumber) {
        randomWord = generateRandomNumber(9999).toString();
      } else if (shouldAddDual) {
        const randomIndex = generateRandomNumber(2);
        randomWord =
          randomIndex === 0
            ? randomWord.concat(getRandomPunctuation())
            : generateRandomNumber(9999).toString();
      }
    };

    if (typeof testLimiterSelector === "number") {
      for (let i = 0; i < testLimiterSelector; i++) {
        generateRandomWord();
        prototypeSentence +=
          i === testLimiterSelector - 1 ? randomWord : randomWord + " ";
      }
    }

    if (typeof testLimiterSelector === "string") {
      for (let i = 0; i < promptValueSelector; i++) {
        generateRandomWord();
        prototypeSentence +=
          i === promptValueSelector - 1 ? randomWord : randomWord + " ";
      }
    }

    setTestSentence(prototypeSentence);
    setTextWritten("");
    setInputValue("");
  }, [testLimiterSelector, promptValueSelector, testModifierSelector]);

  const handleRefresh = useCallback(() => {
    generateTestSentence();
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
  }, [generateTestSentence, active, inputStatusDispatch]);

  useEffect(() => {
    generateTestSentence();
  }, [testLimiterSelector, generateTestSentence]);

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
  };

  const handleFocusClick = () => {
    if (!isInputActiveSelector) {
      inputRef.current?.focus();
      inputStatusDispatch(active());
    }
  };

  return (
    <section className="relative text-custom-primary flex items-center flex-col mt-5">
      <div className="">
        {(inputValue || textWritten) && (
          <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
            {textWritten.split(" ").length - 1}/{testSentence.split(" ").length}
          </span>
        )}
        <div
          className="relative flex justify-center"
          onClick={handleFocusClick}
        >
          {!isInputActiveSelector && (
            <div className="text-lg lg:text-xl px-3 text-custom-secondary z-10 absolute w-full h-full backdrop-blur-sm flex justify-center items-center">
              <GiArrowCursor className="mr-3" />
              Click here to focus
            </div>
          )}
          <WordValidator
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
        className="px-8 py-4 rounded-md text-2xl lg:text-custom-xl flex justify-center mt-10
         hover:text-custom-fill hover:bg-custom-secondary transition ease-in-out delay-75 focus:bg-custom-secondary
          focus:text-custom-fill outline-none"
        onClick={handleRefresh}
        ref={btnRef}
      >
        <VscDebugRestart />
      </button>
    </section>
  );
};
