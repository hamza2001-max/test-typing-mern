import { useState, useRef, useEffect } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { wordsJSON } from "../testJson.js";
import { useDispatch, useSelector } from "react-redux";
import { TestModeWordsPrompt } from "./TestModeWordsPrompt";
import { customPromptVSlice } from "../redux/visibilitySlice";
import { customPromptVSInterface } from "../types.js";
import { Proto } from "./Proto";

export const TestModeWords = () => {
  const [testSentence, setTestSentence] = useState<string>("hamzaAli");
  const [inputValue, setInputValue] = useState<string>("");
  const [lastInputChar, setLastInputChar] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const customPromptVDispatch = useDispatch();
  const { visibleCustom } = customPromptVSlice.actions;

  const customPromptVSelector = useSelector(
    (state: customPromptVSInterface) => state.customPromptV.customPromptV
  );
  const testLimiterSelector = useSelector(
    (state: { testLimiter: { testLimiter: string } }) =>
      state.testLimiter.testLimiter
  );

  useEffect(() => {
    testSentenceCreator();
  }, [testLimiterSelector]);

  useEffect(() => {
    setLastInputChar(inputValue.split("")[inputValue.length - 1]);
  }, [inputValue]);

  // console.log(lastInputChar);

  const testSentenceCreator = () => {
    let prototypeSentence = "";
    if (typeof testLimiterSelector === "number") {
      let randomLimit = Math.floor(Math.random() * wordsJSON.length);
      for (let i = 0; i < testLimiterSelector - 1; i++) {
        prototypeSentence += wordsJSON[randomLimit].word + " ";
        randomLimit = Math.floor(Math.random() * wordsJSON.length);
      }
      setTestSentence(prototypeSentence);
    }
    if (typeof testLimiterSelector === "string") {
      customPromptVDispatch(visibleCustom());
    }
  };

  const handleRefresh = () => {
    testSentenceCreator();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (inputValue.split("").length === testSentence.length - 1) {
      if (inputRef.current) {
        inputRef.current.disabled = true;
      }
    }
  };

  const TestSentence = () => {
    const newTestSentence = testSentence.split("").map((letter, index) => {
      let colorClass = "";
      if (index <= inputValue.length - 1) {
        if (
          testSentence.split("")[index] ===
          inputValue.split("")[inputValue.length - 1]
        ) {
          if (index === inputValue.length - 1) {
            colorClass = "text-custom-secondary";
          } else {
            if (testSentence.split("")[index] === inputValue.split("")[index]) {
              colorClass = "text-custom-secondary";
            } else {
              colorClass = "text-custom-tertiary";
            }
          }
        } else {
          if (testSentence.split("")[index] === inputValue.split("")[index]) {
            colorClass = "text-custom-secondary";
          } else {
            colorClass = "text-custom-tertiary";
          }
        }
      }
      return (
        <span key={index} className={colorClass}>
          {letter}
        </span>
      );
    });

    const sentenceParts: JSX.Element[][] = [];
    let currentPart: JSX.Element[] = [];

    for (let i = 0; i < newTestSentence.length; i++) {
      const child = newTestSentence[i].props.children;
      if (child === " ") {
        if (currentPart !== null) {
          sentenceParts.push(currentPart);
          currentPart = [];
          currentPart.push(newTestSentence[i]);
          sentenceParts.push(currentPart);
          currentPart = [];
        }
      } else {
        currentPart.push(newTestSentence[i]);
      }
    }
    if (currentPart !== null) {
      sentenceParts.push(currentPart);
    }

    const incorrectIndex: number[] = [];
    // console.log(incorrectIndex);

    return (
      <section>
        <div className="w-64">
          {sentenceParts.map((part, index) => {
            const hasCustomTertiaryClass = part.some(
              (item) => item.props.className === "text-custom-tertiary"
            );
            return hasCustomTertiaryClass ? (
              <span
                key={index}
                className="tailUnderline underline-offset-2 pb-1"
              >
                {part.map((item, i) =>
                  item.props.className === "text-custom-tertiary" ? (
                    <span key={i} className={item.props.className}>
                      {item.props.children}
                    </span>
                  ) : (
                    item
                  )
                )}
              </span>
            ) : (
              part
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <section>
      <div className="text-custom-primary relative flex flex-col px-10 py-10 my-12 mb-36">
        {inputValue && (
          <h1 className="text-custom-tertiary">
            {inputValue.split(" ").length - 1}/{testSentence.split(" ").length}{" "}
            words
          </h1>
        )}
        <div className="text-2xl">
          <TestSentence />
        </div>
        <input
          type="text"
          onChange={handleChange}
          className="h-10 border border-custom-primary rounded-md mt-6 py-1 px-1"
          ref={inputRef}
        />
        <button
          className="text-2xl w-full flex justify-center mt-10 hover:text-custom-secondary transition ease-in-out delay-75"
          onClick={handleRefresh}
        >
          <VscDebugRestart />
        </button>
      </div>
      {customPromptVSelector && <TestModeWordsPrompt />}
      <Proto/>
    </section>
  );
};
