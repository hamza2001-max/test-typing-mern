import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../jsonData";
import { useDispatch, useSelector } from "react-redux";
import { testModifierSlice } from "../redux/testSettingsSlice";

export const TestSettingsModeSm = () => {
  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();

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
        {testSettingModifierData.map((button) => (
          <button
            key={button.label}
            className={`${
              button.label === testModifierSelector
                ? "text-custom-primary bg-custom-secondary"
                : "text-custom-secondary bg-custom-primary"
            } py-2 rounded-md`}
            onClick={() => {
              button.label === testModifierSelector
                ? testModifierDispatch(testModifierSlice.actions.reset())
                : testModifierDispatch(button.action());
            }}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col space-y-2">
        {testSettingModeData.map((button) => (
          <button
            key={button.label}
            className={`${
              button.label === testModeSelector
                ? "text-custom-primary bg-custom-secondary"
                : "text-custom-secondary bg-custom-primary"
            } py-2 rounded-md`}
            onClick={() => {
              const action = {
                type: "SET_LIMIT",
                payload: button.defaultLimit,
              };
              testModeDispatch(button.action());
              button.defaultLimit && testLimiterDispatch(action);
            }}
          >
            {button.label}
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
              onClick={() => testLimiterDispatch(option.action)}
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
