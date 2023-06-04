import { useState } from "react";
import { useDispatch } from "react-redux";
import { promptVisibilitySlice } from "../redux/visibilitySlice";
import {
  limiterPromptSlice,
  testLimiterSlice,
} from "../redux/testSettingsSlice";

export const WordsLimiterPrompt = () => {
  const [inputValue, setInputValue] = useState(0);
  const [typeWarning, setTypeWarning] = useState(false);
  const limiterPromptDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const { testLimiterReducer } = testLimiterSlice.actions;

  const { setLimiterPrompt } = limiterPromptSlice.actions;
  const { inVisibleCustom } = promptVisibilitySlice.actions;

  const validateInput = (value: number) => {
    return !isNaN(value) && value.toString().trim() !== "";
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
      />
      <p className="text-sm">
        Enter 0 to start infinite mode.
      </p>
      {typeWarning && <p>Value must be a number.</p>}
      <button
        className="w-full rounded-lg py-2 bg-custom-fadedFill text-custom-secondary"
        onClick={() => {
          if (validateInput(inputValue)) {
            testLimiterDispatch(testLimiterReducer("custom"));
            limiterPromptDispatch(setLimiterPrompt(inputValue));
            customPromptVDispatch(inVisibleCustom());
          } else {
            setTypeWarning(true);
          }
        }}
      >
        Enter
      </button>
    </div>
  );
};
