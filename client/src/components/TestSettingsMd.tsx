import { useDispatch, useSelector } from "react-redux";
import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../data/testSettingData";
import { RootState } from "../redux/store";
import { testModifierSlice } from "../redux/testSettingsSlice";
import {
  promptVisibilitySlice,
  testSettingsVSlice,
} from "../redux/visibilitySlice";

export const TestSettingsMd = () => {
  const { visibleCustom } = promptVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVSlice.actions;
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );
  const testModifierSelector = useSelector(
    (state: RootState) => state.testModifier.testModifier
  );
  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  return (
    <div className="hidden sm:flex rounded-md bg-custom-fadedFill text-custom-primary cursor-pointer text-sm py-2 px-4">
      <div className="flex items-center space-x-4">
        {testSettingModifierData.map((btn) => (
          <button
            key={btn.label}
            className={`${
              btn.label === testModifierSelector && "text-custom-tertiary"
            } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
            onClick={() => {
              btn.label === testModifierSelector
                ? testModifierDispatch(testModifierSlice.actions.reset())
                : testModifierDispatch(btn.action());
            }}
          >
            {btn.label}
          </button>
        ))}
        <div className="bg-custom-fill w-1 h-5"></div>
      </div>
      <div className="flex items-center space-x-4 ml-4">
        {testSettingModeData.map((btn) => (
          <button
            key={btn.label}
            className={`${
              btn.label === testModeSelector && "text-custom-tertiary"
            } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
            onClick={() => {
              testModeDispatch(btn.action());
              btn.defaultLimit && testLimiterDispatch(btn.defaultLimit);
            }}
          >
            {btn.label}
          </button>
        ))}
        <div className="bg-custom-fill w-1 h-5"></div>
      </div>
      <div className="flex items-center space-x-4 ml-4">
        {testModeSelector === "time" &&
          testSettingLimiterData.time.map((option, index) => (
            <button
              key={index}
              className={`${
                option.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
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
                option.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => {
                option.limit !== "custom" && testLimiterDispatch(option.action);
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
                option.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
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
                option.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => testLimiterDispatch(option.action)}
            >
              {option.limit}
            </button>
          ))}
      </div>
    </div>
  );
};
