import { useState, useRef } from "react";
// import { TestSentence } from "./TestSentence";
import testJSON from "../testJson.js";

export const TypingSpeedTest = () => {
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 5)
  );
  const [testSentence, setTestSentence] = useState<string>(
    testJSON[randomNumber].sentence
  );
  const [refresh, setRefresh] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRefresh = () => {
    setRandomNumber(Math.floor(Math.random() * testJSON.length));
    setTestSentence(testJSON[randomNumber].sentence);
    setRefresh(true);
  };

  if (refresh) {
    return <TypingSpeedTest />;
  }

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
            colorClass = "text-green-500";
          } else {
            if (testSentence.split("")[index] === inputValue.split("")[index]) {
              colorClass = "text-green-500";
            } else {
              colorClass = "text-red-500";
            }
          }
        } else {
          if (testSentence.split("")[index] === inputValue.split("")[index]) {
            colorClass = "text-green-500";
          } else {
            colorClass = "text-red-500";
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

    return (
      <section>
        <div className="w-64">
          {sentenceParts.map((part, index) => {
            for (let i = 0; i < part.length; i++) {
              if (part[i].props.className === "text-red-500")
                return (
                  <span
                    key={index}
                    className="text-red-500 underline underline-offset-2 pb-1"
                  >
                    {part}
                  </span>
                );
            }
            return part;
          })}
        </div>
        {/* <div>{newTestSentence}</div> */}
      </section>
    );
  };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === " ") {
  //     console.log("hey");
  //   }
  // };

  return (
    <div className="bg-sky-100 relative flex flex-col px-10 py-10 my-12">
      <p>input characters: {inputValue.length - 1}</p>
      <p>Sentence characters: {testSentence.length - 1}</p>
      <h1>
        {inputValue.split(" ").length - 1}/{testSentence.split(" ").length}{" "}
        words
      </h1>
      <TestSentence />
      <input
        type="text"
        onChange={handleChange}
        // onKeyDown={handleKeyDown}
        className="border border-black mt-2"
        ref={inputRef}
      />
      <button onClick={handleRefresh}>refresh</button>
      <div className="bg-custom-secondary">
        <h1 className="text-custom-primary">This is a heading</h1>
        <h1 className="text-custom-secondary">This is a heading</h1>
      </div>
    </div>
  );
};
