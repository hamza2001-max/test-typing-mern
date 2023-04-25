import { useState, useEffect, useRef } from "react";

export const TypingSpeedTest = () => {
  const sentence = "An ant jumped over a lazy dog.";
  const [inputValue, setInputValue] = useState<string>("");
  const [sentenceLength, setSentenceLength] = useState<number>(0);
  // const [letterIndex, setLetterIndex] = useState<number>(-1);
  // const [inputIndex, setInputIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const wordLength = sentence.split(" ").length;
    setSentenceLength(wordLength);
  }, [sentence]);

  const handleRefresh = () => {
    setRefresh(true);
  };

  if (refresh) {
    return <TypingSpeedTest />;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.split(" ").length === sentenceLength + 1) {
      if (inputRef.current) {
        inputRef.current.disabled = true;
      }
    }
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // if (
    //   !event.shiftKey &&
    //   !event.ctrlKey &&
    //   !event.altKey &&
    //   !event.metaKey &&
    //   event.key !== "Enter"
    // ) {
    //   switch (event.key) {
    //     case " ":
    //       setLetterIndex(-1);
    //       break;
    //     case "Backspace":
    //       if (letterIndex > -1) {
    //         setLetterIndex((value) => value - 1);
    //       }
    //       if (inputIndex > -1) {
    //         setInputIndex((value) => value - 1);
    //       }
    //       break;
    //     default:
    //       setLetterIndex((value) => ++value);
    //       setInputIndex((value) => ++value);
    //       break;
    //   }
    // }
    // if (/^[ A-Za-z0-9_@./#&+-]$/.test(event.key)) {
    //   if (event.shiftKey) {
    //     setLetterIndex((value) => ++value);
    //     setInputIndex((value) => ++value);
    //   }
    // }
  };

  if (
    sentence.split("")[inputValue.length - 1] ===
    inputValue.split("")[inputValue.length - 1]
  ) {
    console.log("correct");
  } else {
    console.log("wrong");
  }

  return (
    <div className="bg-sky-100 relative flex flex-col px-10 py-10 my-12">
      <p>input characters: {inputValue.length - 1}</p>
      <p>Sentence characters: {sentence.split("").length - 1}</p>
      <p>{inputValue}</p>
      <h1>
        {inputValue.split(" ").length - 1}/{sentence.split(" ").length} words
      </h1>
      <div className="flex">
        {sentence.split("").map((letter, index) => {
          if (letter === " ") {
            return <span key={index}>&nbsp;</span>;
          }
          if (index <= inputValue.length - 1) {
            if (
              sentence.split("")[inputValue.length - 1] ===
              inputValue.split("")[inputValue.length - 1]
            ) {
              return (
                <span key={index} className="text-green-800">
                  {letter}
                </span>
              );
            } else {
              return (
                <span key={index} className="text-red-800">
                  {letter}
                </span>
              );
            }
          } else {
            return (
              <span key={index} className="text-black">
                {letter}
              </span>
            );
          }
        })}
      </div>
      <div className="flex"></div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        className="border border-black mt-2"
        ref={inputRef}
      />
      <button onClick={handleRefresh}>refresh</button>
    </div>
  );
};
