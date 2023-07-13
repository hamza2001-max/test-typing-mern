import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { promptVisibilitySlice } from "../../redux/promptVisibilitySlice";
import { testLimiterSlice } from "../../redux/testLimiterSlice";
import { limiterPromptSlice } from "../../redux/limiterPromptSlice";

export const WordsLimiterPrompt = () => {
  const [inputValue, setInputValue] = useState(0);
  const [typeWarning, setTypeWarning] = useState(false);
  const [rangeWarning, setRangeWarning] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const limiterPromptDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();

  const { testLimiterReducer } = testLimiterSlice.actions;
  const { setLimiterPrompt } = limiterPromptSlice.actions;
  const { inVisibleCustom } = promptVisibilitySlice.actions;

  const validateInput = (value: number) => {
    return !isNaN(value) && value.toString().trim() !== "";
  };

  const handleKeyDown =(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      btnRef.current?.click();
    }
  };

  return (
    <div
      className="w-98 z-30 space-y-4 p-8 rounded-xl text-custom-primary bg-custom-fill absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-xl">Word Amount</h1>
      <input
        type="text"
        className="bg-custom-fadedFill text-custom-secondary text-lg w-full p-2 rounded-lg focus:outline-none"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
        onKeyDown={handleKeyDown}
      />
      {rangeWarning && <p>Value must be larger than 0.</p>}
      {typeWarning && <p>Value must be a number.</p>}
      <button
        className="w-full rounded-lg py-2 bg-custom-fadedFill text-custom-secondary"
        ref={btnRef}
        onClick={() => {
          setRangeWarning(false);
          setTypeWarning(false);
          if (inputValue <= 0) {
            setRangeWarning(true);
          } else {
            if (validateInput(inputValue)) {
              testLimiterDispatch(testLimiterReducer("custom"));
              limiterPromptDispatch(setLimiterPrompt(inputValue));
              customPromptVDispatch(inVisibleCustom());
            } else {
              setTypeWarning(true);
            }
          }
        }}
      >
        Enter
      </button>
    </div>
  );
};
