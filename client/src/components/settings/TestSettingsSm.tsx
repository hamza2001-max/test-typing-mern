import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../../data/testSettingsData";
import { useDispatch, useSelector } from "react-redux";
import { testModifierSlice } from "../../redux/testModifierSlice";
import { promptVisibilitySlice } from "../../redux/promptVisibilitySlice";
import { testSettingsVisibilitySlice } from "../../redux/testSettingsVisibilitySlice";
import { RootState } from "../../redux/store";

export const TestSettingsSm = () => {
  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  const { visibleCustom } = promptVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
  const { dual, numbers, punctuation } = testModifierSlice.actions;

  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );
  const testModifierSelector = useSelector(
    (state: RootState) => state.testModifier.testModifier
  );
  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );

  return (
    <section
      className="w-96 p-4 rounded-xl flex flex-col bg-custom-fill z-30
  text-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          {testSettingModifierData.map((btn) => (
            <button
              key={btn.label}
              className={`
             bg-custom-fadedFill text-custom-secondary 
              ${
                btn.label === testModifierSelector &&
                "!text-custom-fill bg-custom-tertiary"
              } 
              ${
                testModifierSelector === "dual" &&
                "!text-custom-fill bg-custom-tertiary"
              }
              py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
              onClick={() => {
                testModifierSelector === ""
                  ? testModifierDispatch(btn.action())
                  : testModifierSelector === "dual"
                  ? btn.label === "punctuation"
                    ? testModifierDispatch(numbers())
                    : testModifierDispatch(punctuation())
                  : btn.label === testModifierSelector
                  ? testModifierDispatch(testModifierSlice.actions.reset())
                  : testModifierSelector &&
                    testModifierSelector !== btn.label &&
                    testModifierDispatch(dual());
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {testSettingModeData.map((btn) => (
            <button
              key={btn.label}
              className={`${
                btn.label === testModeSelector
                  ? "text-custom-fill bg-custom-tertiary"
                  : "text-custom-secondary bg-custom-fadedFill"
              } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
              onClick={() => {
                testModeDispatch(btn.action());
                btn.defaultLimit && testLimiterDispatch(btn.defaultLimit);
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {testModeSelector === "time" &&
            testSettingLimiterData.time.map((option, index) => (
              <button
                key={index}
                className={`${
                  option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                onClick={() => testLimiterDispatch(option.action)}
              >
                {option.limit}
              </button>
            ))}
          {testModeSelector === "words" &&
            testSettingLimiterData.words.map((option, index) => (
              <button
                key={index}
                className={`${
                  option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                onClick={() => {
                  option.limit !== "custom" &&
                    testLimiterDispatch(option.action);
                  if (option.limit === "custom") {
                    customPromptVDispatch(visibleCustom());
                    testSettingsVDispatch(inVisibleTS());
                  }
                }}
              >
                {option.limit}
              </button>
            ))}
          {testModeSelector === "quote" &&
            testSettingLimiterData.quote.map((option, index) => (
              <button
                key={index}
                className={`${
                  option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                onClick={() => testLimiterDispatch(option.action)}
              >
                {option.limit}
              </button>
            ))}
          {testModeSelector === "custom" &&
            testSettingLimiterData.custom.map((option, index) => (
              <button
                key={index}
                className={`${
                  option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                onClick={() => testLimiterDispatch(option.action)}
              >
                {option.limit}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};
