import { useRef, useState, useEffect } from "react";
import { ZenFrameProgress } from "./ZenFrameProgress";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { VscDebugRestart } from "react-icons/vsc";
import { GiArrowCursor } from "react-icons/gi";
import { inputStatusSlice } from "../../redux/inputStatusSlice";
import { Caret } from "./Caret";
import { useMediaQuery } from "react-responsive";
import { useRedux } from "../../hooks/useRedux";

export const ZenFrame = () => {
  let caretConstRef = useRef(14.38);
  const [inputValue, setInputValue] = useState("");
  const [textWritten, setTextWritten] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isBreakpointLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const { active } = inputStatusSlice.actions;
  const { setLineHeiInc, setScrollIndex, divRef, typedSentenceRef } =
    useAutoScroll({
      textWritten: inputValue,
      testSentence: "",
    });
  const { isInputActiveSelector, inputStatusDispatch } = useRedux();

  useEffect(() => {
    if (isBreakpointLarge) {
      caretConstRef.current = 16.3;
    }
  }, [isBreakpointLarge]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
      inputRef.current.disabled = false;
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleRefresh = () => {
    setTextWritten("");
    setInputValue("");
    setScrollIndex(3);
    setLineHeiInc(1.25);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (typedSentenceRef.current) {
      typedSentenceRef.current.scrollTop = 0;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
      setTextWritten((prev) => prev + inputValue + " ");
      setInputValue("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleFocusClick = () => {
    inputRef.current?.focus();
    inputStatusDispatch(active());
  };

  return (
    <div className="relative text-custom-primary flex items-center flex-col mt-5">
      <div className="flex flex-col align-top">
        <ZenFrameProgress textWritten={textWritten} inputValue={inputValue} />
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
          <div
            className="flex text-custom-secondary text-2xl lg:text-custom-xl h-30 overflow-hidden"
            ref={typedSentenceRef}
          >
            <p className="leading-10 w-64 xs:w-80 sm:w-99 md:w-100 lg:w-101 xl:w-102">
              {textWritten}
              {inputValue.split(" ").map((word, index) => {
                return (
                  <>
                    <span className="relative" key={index}>
                      {word}
                      {isInputActiveSelector && inputValue
                        ? inputValue.split(" ").length - 1 === index && (
                            <Caret />
                          )
                        : isInputActiveSelector && (
                            <>
                              <span className="opacity-0">val</span>{" "}
                              <Caret offset={caretConstRef.current} />
                            </>
                          )}
                    </span>{" "}
                  </>
                );
              })}
            </p>
          </div>
          <div
            className="text-2xl lg:text-custom-xl absolute opacity-0 -z-10"
            ref={divRef}
          >
            <p className="w-64 xs:w-80 sm:w-99 md:w-100 lg:w-101 xl:w-102 ">
              {textWritten}
              {inputValue}
            </p>
          </div>
        </div>
        <input
          type="text"
          className="w-full mt-3 py-2 sr-only"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
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
      >
        <VscDebugRestart />
      </button>
    </div>
  );
};
