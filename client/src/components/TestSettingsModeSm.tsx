import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../jsonData";
import { useDispatch, useSelector } from "react-redux";
import { testModifierSlice } from "../redux/testSettingsSlice";
import { testSettingsVSlice } from "../redux/visibilitySlice";

export const TestSettingsModeSm = () => {
  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const { inVisibleTS } = testSettingsVSlice.actions;

  const testModeSelector = useSelector(
    (state: { testMode: { testMode: string | number } }) =>
      state.testMode.testMode
  );
  const testModifierSelector = useSelector(
    (state: { testModifier: { testModifier: string } }) =>
      state.testModifier.testModifier
  );
  const testLimiterSelector = useSelector(
    (state: { testLimiter: { testLimiter: string } }) =>
      state.testLimiter.testLimiter
  );

  return (
    <section className="space-y-6">
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
                testLimiterDispatch(option.action);
                option.limit === "custom" &&
                  testSettingsVDispatch(inVisibleTS());
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
    </section>
  );
};
