import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../data/testSettingData";
import { useDispatch, useSelector } from "react-redux";
import { testModifierSlice } from "../redux/testSettingsSlice";
import {
  promptVisibilitySlice,
  testSettingsVSlice,
} from "../redux/visibilitySlice";
import { RootState } from "../redux/store";

export const TestSettingsSm = () => {
  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

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

  return (
    <section
      className="w-72 p-4 rounded-xl flex flex-col text-sm bg-custom-fill z-30
  text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          {testSettingModifierData.map((btn) => (
            <button
              key={btn.label}
              className={`${
                btn.label === testModifierSelector
                  ? "text-custom-primary bg-custom-secondary"
                  : "text-custom-secondary bg-custom-primary"
              } py-2 rounded-md`}
              onClick={() => {
                btn.label === testModifierSelector
                  ? testModifierDispatch(testModifierSlice.actions.reset())
                  : testModifierDispatch(btn.action());
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
                  ? "text-custom-primary bg-custom-secondary"
                  : "text-custom-secondary bg-custom-primary"
              } py-2 rounded-md`}
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
                    ? "text-custom-primary bg-custom-secondary"
                    : "text-custom-secondary bg-custom-primary"
                } py-2 rounded-md`}
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
                    ? "text-custom-primary bg-custom-secondary"
                    : "text-custom-secondary bg-custom-primary"
                } py-2 rounded-md`}
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
                    ? "text-custom-primary bg-custom-secondary"
                    : "text-custom-secondary bg-custom-primary"
                } py-2 rounded-md`}
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
                    ? "text-custom-primary bg-custom-secondary"
                    : "text-custom-secondary bg-custom-primary"
                } py-2 rounded-md`}
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
