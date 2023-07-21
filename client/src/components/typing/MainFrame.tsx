import { useCallback, useEffect, useRef, useState } from "react";
import { punctuationsJSON, quoteJSON, wordsJSON } from "../../testJson";
import { VscDebugRestart } from "react-icons/vsc";
import { GiArrowCursor } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { WordValidator } from "./WordValidator";
import { inputStatusSlice } from "../../redux/inputStatusSlice";
import { RootState } from "../../redux/store";
import Result from "../result/Result";
import { isTestFinishedSlice } from "../../redux/isTestFinishedSlice";
import { testOpacitySlice } from "../../redux/testOpacitySlice";
import { MainFrameProgress } from "./MainFrameProgress";
import { useTimer } from "../../hooks/useTimer";

export const MainFrame = () => {
  const [testSentence, setTestSentence] = useState("");
  const [textWritten, setTextWritten] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [source, setSource] = useState("");
  const [lineHeiInc, setLineHeiInc] = useState(1.25);
  const [scrollIndex, setScrollIndex] = useState(3);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTimeArray, setElapsedTimeArray] = useState<number[]>([]);
  const [timeArray, setTimeArray] = useState<number[]>([]);
  const { countDown, startCountDown, resetCountDown } = useTimer();

  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { active } = inputStatusSlice.actions;
  const { testIsFinished, testIsNotFinished } = isTestFinishedSlice.actions;
  const { noOpacity, opacity } = testOpacitySlice.actions;

  const inputStatusDispatch = useDispatch();
  const isTestFinishedDispatch = useDispatch();
  const testOpacityDispatch = useDispatch();

  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const isInputActiveSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );
  const testModifierSelector = useSelector(
    (state: RootState) => state.testModifier.testModifier
  );
  const isTestFinishedSelector = useSelector(
    (state: RootState) => state.isTestFinished.isTestFinished
  );
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );

  useEffect(() => {
    setTextWritten("");
    setInputValue("");
  }, [testModeSelector, testLimiterSelector, testModifierSelector]);

  useEffect(() => {
    if (testModeSelector === "time") {
      if (inputValue) {
        startCountDown();
      }
    }
  }, [inputValue, startCountDown, testModeSelector]);

  useEffect(() => {
    if (inputRef.current) {
      if (inputValue) {
        testOpacityDispatch(noOpacity());
      }
    }
  }, [inputValue, noOpacity, testOpacityDispatch]);

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

    const testSettingsVisible = () => {
      testOpacityDispatch(opacity());
    };

    const inputElement = inputRef.current;
    inputElement?.addEventListener("input", handleInputChange);
    document.addEventListener("keydown", handleBtnKeyDown);
    document.addEventListener("mousemove", testSettingsVisible);
    return () => {
      inputElement?.removeEventListener("input", handleInputChange);
      document.removeEventListener("keydown", handleBtnKeyDown);
      document.addEventListener("mousemove", testSettingsVisible);
    };
  });

  useEffect(() => {
    if (
      textWritten.split(" ").length - 1 === testSentence.split(" ").length ||
      countDown === 0
    ) {
      if (inputRef.current) {
        inputRef.current.disabled = true;
        isTestFinishedDispatch(testIsFinished());
      }
    }
  }, [
    countDown,
    startTime,
    inputValue,
    textWritten,
    testSentence,
    testIsFinished,
    isTestFinishedDispatch,
  ]);

  const generateTestSentence = useCallback(() => {
    let prototypeSentence = "";
    let randomWord = "";
    const generateRandomNumber = (max: number) =>
      Math.floor(Math.random() * max);
    if (testModeSelector === "words" || testModeSelector === "time") {
      const getRandomWord = () =>
        wordsJSON[generateRandomNumber(wordsJSON.length)].word;
      const getRandomPunctuation = () =>
        punctuationsJSON[generateRandomNumber(punctuationsJSON.length)]
          .punctuation;

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

      if (testModeSelector === "words") {
        if (typeof testLimiterSelector === "number") {
          for (let i = 0; i < testLimiterSelector; i++) {
            generateRandomWord();
            prototypeSentence +=
              i === testLimiterSelector - 1 ? randomWord : randomWord + " ";
          }
        }
        setTestSentence(prototypeSentence);
        setTextWritten("");
        setInputValue("");
      }
      if (testModeSelector === "time") {
        if (typeof testLimiterSelector === "number") {
          for (let i = 0; i < 400; i++) {
            generateRandomWord();
            prototypeSentence += randomWord + " ";
          }
        }
        setTestSentence(prototypeSentence);
      }
    } else if (testModeSelector === "quote") {
      if (testLimiterSelector === "all") {
        const keys = Object.keys(quoteJSON);
        const randomIndex = Math.floor(Math.random() * keys.length);
        let rand = generateRandomNumber(quoteJSON[keys[randomIndex]].length);
        prototypeSentence = quoteJSON[keys[randomIndex]][rand].quote;
        setSource(quoteJSON[keys[randomIndex]][rand].source);
      } else {
        let rand = generateRandomNumber(quoteJSON[testLimiterSelector].length);
        prototypeSentence = quoteJSON[testLimiterSelector][rand].quote;
        setSource(quoteJSON[testLimiterSelector][rand].source);
      }
      setTestSentence(prototypeSentence);
      setTextWritten("");
      setInputValue("");
    }
  }, [testLimiterSelector, testModifierSelector, testModeSelector]);

  const resetState = useCallback(() => {
    setTextWritten("");
    setInputValue("");
    inputStatusDispatch(active());
    setScrollIndex(3);
    setLineHeiInc(1.25);
    isTestFinishedDispatch(testIsNotFinished());
    testOpacityDispatch(opacity());
    setTimeArray([]);
    setElapsedTimeArray([]);
    resetCountDown();
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.disabled = false;
      inputRef.current?.focus();
    }
  }, [
    active,
    opacity,
    testIsNotFinished,
    resetCountDown,
    testOpacityDispatch,
    inputStatusDispatch,
    isTestFinishedDispatch,
  ]);

  const handleRefresh = useCallback(() => {
    generateTestSentence();
    resetState();
  }, [generateTestSentence, resetState]);

  useEffect(() => {
    generateTestSentence();
  }, [testLimiterSelector, generateTestSentence]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!inputValue && !textWritten) {
        setStartTime(Date.now());
      }
      if (e.key === "Tab") {
        e.preventDefault();
        btnRef.current?.focus();
      }
      if (e.key === " ") {
        if (inputValue.trim() === "") {
          e.preventDefault();
        } else {
          e.preventDefault();
          setTextWritten((prev) => prev + inputValue + " ");
          const currentTime = Date.now();
          const previousTime =
            timeArray.length > 0 ? timeArray[timeArray.length - 1] : startTime;
          const elapsedTime = (currentTime - previousTime) / 1000;
          setTimeArray((prev) => [...prev, currentTime]);
          setElapsedTimeArray((prev) => [...prev, elapsedTime]);

          setInputValue("");
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }
      }
    },
    [inputValue, textWritten, startTime, timeArray]
  );

  useEffect(() => {
    !isInputActiveSelector && inputRef.current?.blur();
  }, [isInputActiveSelector]);

  const handleFocusClick = () => {
    inputRef.current?.focus();
    inputStatusDispatch(active());
  };

  return !isTestFinishedSelector ? (
    <div className="relative text-custom-primary flex items-center flex-col mt-5">
      <div>
        <MainFrameProgress
          countDown={countDown}
          inputValue={inputValue}
          textWritten={textWritten}
          testSentence={testSentence}
        />
        <div
          className="relative flex justify-center"
          onClick={(e) => {
            e.stopPropagation();
            handleFocusClick();
          }}
        >
          {!isInputActiveSelector && (
            <div
              className={`text-lg lg:text-xl px-3 text-custom-secondary z-10 absolute w-full h-full backdrop-blur-sm flex justify-center items-center`}
            >
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
          />
        </div>
        <input
          type="text"
          className="w-full mt-3 py-2 sr-only"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        className="px-8 py-4 rounded-md text-2xl lg:text-custom-xl flex justify-center mt-10
        hover:text-custom-secondary transition ease-in-out delay-75 focus:bg-custom-secondary
        focus:text-custom-fill outline-none"
        onClick={(e) => {
          e.stopPropagation();
          handleRefresh();
        }}
        ref={btnRef}
      >
        <VscDebugRestart />
      </button>
    </div>
  ) : (
    <Result
      source={source}
      textWritten={textWritten}
      testSentence={
        testModeSelector === "time"
          ? testSentence
              .split(" ")
              .slice(0, textWritten.split(" ").length - 1)
              .join(" ")
          : testSentence
      }
      elapsedTimeArray={elapsedTimeArray}
      resetState={resetState}
      handleRefresh={handleRefresh}
    />
  );
};
