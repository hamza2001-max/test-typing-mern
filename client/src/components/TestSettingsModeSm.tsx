import {
  testSettingLimiterData,
  testSettingModeData,
  testSettingModifierData,
} from "../jsonData";
import { useDispatch, useSelector } from "react-redux";

export const TestSettingsModeSm = () => {
  const testModeSelector = useSelector(
    (state: { testMode: string }) => state.testMode
  );
  const testModeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col space-y-2">
        {testSettingModifierData.map((button) => (
          <button
            key={button.label}
            className={`text-custom-secondary bg-custom-primary py-2 rounded-md`}
            onClick={() => {
              testModeDispatch(button.action());
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
            className={`text-custom-secondary bg-custom-primary py-2 rounded-md`}
            onClick={() => {
              testModifierDispatch(button.action());
            }}
          >
            {button.label}
          </button>
        ))}
      </div>


      {/* testModeSelector === "time" is never true. */}

      
      <div className="flex flex-col space-y-2">
        {testModeSelector === "time" &&
          testSettingLimiterData.time.map((option, index) => (
            <button
              key={index}
              className={`text-custom-secondary bg-custom-primary py-2 rounded-md`}
              onClick={() => testLimiterDispatch(option.action)}
            >
              {option.limit}
            </button>
          ))}
        {/* {testModeSelector === "words" &&
          testSettingLimiterData.words.map((option, index) => (
            <button
              key={index}
              className={`text-custom-primary bg-custom-secondary py-2 rounded-md`}
              onClick={() => testModeDispatch(option.limit)}
            >
              {option.limit}
            </button>
          ))} */}
        {/* {testModeSelector === "quote" &&
          testSettingLimiterData.quote.map((option, index) => (
            <button
              key={index}
              className={`text-custom-primary bg-custom-secondary py-2 rounded-md`}
              onClick={() => setTestLimit(option.limit)}
            >
              {option.limit}
            </button>
          ))} */}
        {/* {testModeSelector === "custom" &&
          testSettingLimiterData.custom.map((option, index) => (
            <button
              key={index}
              className={`text-custom-primary bg-custom-secondary py-2 rounded-md`}
              onClick={() => setTestLimit(option.limit)}
            >
              {option.limit}
            </button>
          ))} */}
      </div>
    </>
  );
};
{
  /* {JSON.stringify(testModeSelector)} */
}
