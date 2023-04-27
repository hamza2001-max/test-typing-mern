import { useEffect, useState, useRef } from "react";
// import { TestSentence } from "./TestSentence";
// import testJSON from "../testJson.js";
const testJSON = [
  {
      id: 0,
      sentence: 'A silly crow flew over a fence',
  },
  {
      id: 1,
      sentence: 'The dog, which had been running around the yard all day, was exhausted and panting heavily when he finally came inside.',
  },
  {
      id: 2,
      sentence: 'The cat sat on the mat.',
  },
  {
      id: 3,
      sentence: 'The woman smiled at the child.',
  },
]
export const TypingSpeedTest = () => {
  // const testSentence = "A fox jumped over a lazy dog.";
  const [testSentence, setTestSentence] = useState<string>("A fox jumped over a lazy dog.");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRefresh = () => {
    setRefresh(true);
  };

  if (refresh) {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);
    
    // const newValue = testJSON[randomNumber].sentence;
    // setTestSentence(newValue);
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
    const parts: JSX.Element[][] = [];
    let currentPart: JSX.Element[] = [];

    for (let i = 0; i < newTestSentence.length; i++) {
      const child = newTestSentence[i].props.children;
      if (child === " ") {
        if (currentPart !== null) {
          parts.push(currentPart);
          currentPart = [];
          currentPart.push(newTestSentence[i]);
          parts.push(currentPart);
          currentPart = [];
        }
      } else {
        currentPart.push(newTestSentence[i]);
      }
    }
    if (currentPart !== null) {
      parts.push(currentPart);
    }

    return (
      <section>
        <div>
          {parts.map((part, index) => {
            for (let i = 0; i < part.length; i++) {
              if (part[i].props.className === "text-red-500")
                return (
                  <span key={index} className="text-red-500 underline underline-offset-2 pb-1">
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

  return (
    <div className="bg-sky-100 relative flex flex-col px-10 py-10 my-12">
      <p>input characters: {inputValue.length - 1}</p>
      <p>Sentence characters: {testSentence.length - 1}</p>
      <p>{inputValue}</p>
      <h1>
        {inputValue.split(" ").length - 1}/{testSentence.split(" ").length}{" "}
        words
      </h1>
      <TestSentence />
      <input
        type="text"
        onChange={handleChange}
        className="border border-black mt-2"
        ref={inputRef}
      />
      <button onClick={handleRefresh}>refresh</button>
    </div>
  );
};
