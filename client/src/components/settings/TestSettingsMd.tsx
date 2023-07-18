import { useDispatch, useSelector } from "react-redux";
import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../../data/testSettingsData";
import { RootState } from "../../redux/store";
import { testModifierSlice } from "../../redux/testModifierSlice";
import { testSettingsVisibilitySlice } from "../../redux/testSettingsVisibilitySlice";
import { promptVisibilitySlice } from "../../redux/promptVisibilitySlice";

export const TestSettingsMd = () => {
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

  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  return (
    <div className="hidden xs:flex xs:flex-col xs:items-center md:flex-row rounded-md bg-custom-fadedFill text-custom-primary cursor-pointer text-sm py-1 px-4">
      <div className="flex items-center space-x-5 lg:space-x-4 md:space-x-2">
        {testSettingModifierData.map((btn) => {
          return (
            <button
              key={btn.label}
              className={`${
                btn.label === testModifierSelector && "text-custom-tertiary"
              } ${testModifierSelector === "dual" && "text-custom-tertiary"}
              flex items-center py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
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
              <btn.icon className="mr-1" />
              {btn.label}
            </button>
          );
        })}
        <div className="hidden md:block bg-custom-fill w-1 h-5 rounded-lg"></div>
      </div>
      <div className="flex items-center space-x-5 ml-5 lg:space-x-4 lg:ml-4 md:space-x-2 md:ml-2">
        {testSettingModeData.map((btn) => {
          return (
            <button
              key={btn.label}
              className={`${
                btn.label === testModeSelector && "text-custom-tertiary"
              } flex items-center py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => {
                testModeDispatch(btn.action());
                btn.defaultLimit && testLimiterDispatch(btn.defaultLimit);
              }}
            >
              <btn.icon className="mr-1" />
              {btn.label}
            </button>
          );
        })}
        <div className="hidden md:block bg-custom-fill w-1 h-5 rounded-lg"></div>
      </div>
      <div className="flex items-center space-x-5 ml-5 lg:space-x-4 lg:ml-4 md:space-x-2 md:ml-2">
        {testModeSelector === "time" &&
          testSettingLimiterData.time.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => testLimiterDispatch(btn.action)}
            >
              {btn.limit}
            </button>
          ))}
        {testModeSelector === "words" &&
          testSettingLimiterData.words.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => {
                btn.limit !== "custom" && testLimiterDispatch(btn.action);
                if (btn.limit === "custom") {
                  customPromptVDispatch(visibleCustom());
                  testSettingsVDispatch(inVisibleTS());
                }
              }}
            >
              {btn.limit}
            </button>
          ))}
        {testModeSelector === "quote" &&
          testSettingLimiterData.quote.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => testLimiterDispatch(btn.action)}
            >
             {typeof btn.limit === "string" ? btn.limit : <btn.limit/>}
            </button>
          ))}
        {testModeSelector === "custom" &&
          testSettingLimiterData.custom.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => testLimiterDispatch(btn.action)}
            >
              {btn.limit}
            </button>
          ))}
      </div>
    </div>
  );
};
