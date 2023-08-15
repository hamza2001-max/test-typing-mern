import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../../data/testSettingsData";
import { testModifierSlice } from "../../redux/testModifierSlice";
import { useRedux } from "../../hooks/useRedux";
import { isCusLimVisibilitySlice } from "../../redux/cusLimVisibility";

export const TestSettingsMd = () => {
  const { dual, numbers, punctuation } = testModifierSlice.actions;
  const { visibleCus } = isCusLimVisibilitySlice.actions;
  const {
    testFrameSelector,
    testLimiterSelector,
    testModifierSelector,
    testFrameDispatch,
    testLimiterDispatch,
    testModifierDispatch,
    isCusLimVisibleDispatch,
  } = useRedux();

  return (
    <div className="hidden xs:flex xs:flex-col xs:items-center md:flex-row rounded-md bg-custom-fadedFill text-custom-primary cursor-pointer text-sm py-1 px-4">
      {(testFrameSelector === "time" ||
        testFrameSelector === "words" ||
        testFrameSelector === "custom") && (
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
      )}
      <div className="flex items-center space-x-5 ml-5 lg:space-x-4 lg:ml-4 md:space-x-2 md:ml-2">
        {testSettingModeData.map((btn) => {
          return (
            <button
              key={btn.label}
              className={`${
                btn.label === testFrameSelector && "text-custom-tertiary"
              } flex items-center py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => {
                testFrameDispatch(btn.action());
                btn.defaultLimit && testLimiterDispatch(btn.defaultLimit);
              }}
            >
              <btn.icon className="mr-1" />
              {btn.label}
            </button>
          );
        })}
        {testFrameSelector !== "zen" && (
          <div className="hidden md:block bg-custom-fill w-1 h-5 rounded-lg"></div>
        )}
      </div>
      <div className="flex items-center space-x-5 ml-5 lg:space-x-4 lg:ml-4 md:space-x-2 md:ml-2">
        {testFrameSelector === "time" &&
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
        {testFrameSelector === "words" &&
          testSettingLimiterData.words.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.limit === testLimiterSelector && "text-custom-tertiary"
              } py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => {
                testLimiterDispatch(btn.action);
              }}
            >
              {btn.limit}
            </button>
          ))}
        {testFrameSelector === "quote" &&
          testSettingLimiterData.quote.map((btn, index) => (
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
        {testFrameSelector === "custom" &&
          testSettingLimiterData.custom.map((btn, index) => (
            <button
              key={index}
              className={`py-2 rounded-md hover:text-custom-secondary transition ease-in-out delay-75`}
              onClick={() => {
                testLimiterDispatch(btn.action);
                isCusLimVisibleDispatch(visibleCus());
              }}
            >
              {btn.limit}
            </button>
          ))}
      </div>
    </div>
  );
};
