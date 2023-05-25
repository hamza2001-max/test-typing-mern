import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { promptValueInterface } from "../types";
import { limiterPromptSlice } from "../redux/testSettingsSlice";

export const WordsLimiterPrompt = () => {
  const [inputValue, setInputValue] = useState(0);
  const limiterPromptDispatch = useDispatch();
  const { setLimiterPrompt } = limiterPromptSlice.actions;

  return (
    <div
      className="w-98 z-10 space-y-4 p-8 border border-custom-primary rounded-xl text-custom-primary bg-custom-fill absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-xl">Word Amount</h1>
      <input
        type="text"
        className="text-custom-secondary text-lg w-full p-2 rounded-lg focus:outline-none"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque
        labore in qui soluta, necessitatibus vitae esse?
      </p>
      {/* {typeWarning && <p>Wrong Input.</p>} */}
      <button
        className="w-full rounded-lg py-2 bg-custom-primary text-custom-secondary"
        onClick={() => {
          console.log("hey");
          limiterPromptDispatch(setLimiterPrompt(inputValue));
        }}
      >
        Enter
      </button>
    </div>
  );
};
