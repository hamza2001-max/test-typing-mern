import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../../data/testSettingsData";
import { testModifierSlice } from "../../redux/testModifierSlice";
import { useRedux } from "../../hooks/useRedux";
import { isCusLimVisibilitySlice } from "../../redux/cusLimVisibility";
import { testSettingsVisibilitySlice } from "../../redux/testSettingsVisibilitySlice";

export const TestSettingsSm = () => {
  const { dual, numbers, punctuation } = testModifierSlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
  const { visibleCus } = isCusLimVisibilitySlice.actions;
  const {
    testFrameSelector,
    testLimiterSelector,
    testModifierSelector,
    testSettingsVDispatch,
    testFrameDispatch,
    isCusLimVisibleDispatch,
    testLimiterDispatch,
    testModifierDispatch,
  } = useRedux();

  return (
    <section
      className="w-96 p-4 rounded-xl flex flex-col bg-custom-fill z-30
  text-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="space-y-6">
        {(testFrameSelector === "time" ||
          testFrameSelector === "words" ||
          testFrameSelector === "custom") && (
            <div className="flex flex-col space-y-2">
              {testSettingModifierData.map((btn) => (
                <button
                  key={btn.label}
                  className={`
              bg-custom-fadedFill text-custom-secondary 
              ${btn.label === testModifierSelector &&
                    "!text-custom-fill bg-custom-tertiary"
                    } 
              ${testModifierSelector === "dual" &&
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
          )}
        <div className="flex flex-col space-y-2">
          {testSettingModeData.map((btn) => (
            <button
              key={btn.label}
              className={`${btn.label === testFrameSelector
                ? "text-custom-fill bg-custom-tertiary"
                : "text-custom-secondary bg-custom-fadedFill"
                } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
              onClick={() => {
                testFrameDispatch(btn.action());
                btn.defaultLimit && testLimiterDispatch(btn.defaultLimit);
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
        {testFrameSelector !== "zen" && (
          <div className="flex flex-col space-y-2">
            {testFrameSelector === "time" &&
              testSettingLimiterData.time.map((option, index) => (
                <button
                  key={index}
                  className={`${option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                    } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                  onClick={() => testLimiterDispatch(option.action)}
                >
                  {option.limit}
                </button>
              ))}
            {testFrameSelector === "words" &&
              testSettingLimiterData.words.map((option, index) => (
                <button
                  key={index}
                  className={`${option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                    } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                  onClick={() => {
                    testLimiterDispatch(option.action);
                  }}
                >
                  {option.limit}
                </button>
              ))}
            {testFrameSelector === "quote" &&
              testSettingLimiterData.quote.map((option, index) => (
                <button
                  key={index}
                  className={`${option.limit === testLimiterSelector
                    ? "text-custom-fill bg-custom-tertiary"
                    : "text-custom-secondary bg-custom-fadedFill"
                    } py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                  onClick={() => testLimiterDispatch(option.action)}
                >
                  {option.limit}
                </button>
              ))}
            {testFrameSelector === "custom" &&
              testSettingLimiterData.custom.map((option, index) => (
                <button
                  key={index}
                  className={`text-custom-secondary bg-custom-fadedFill py-2 rounded-md hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}
                  onClick={() => {
                    testLimiterDispatch(option.action);
                    isCusLimVisibleDispatch(visibleCus());
                    testSettingsVDispatch(inVisibleTS());
                  }}
                >
                  {option.limit}
                </button>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};
