import { testSettingLimiterData } from "../jsonData";
import { testLimiterInterface } from "../types";

export const TestSettingLimiterSm = ({
  testMode,
  testLimit,
  setTestLimit,
}: testLimiterInterface) => {
  return (
    <div className="flex flex-col space-y-2">
      {testMode === "time" &&
        testSettingLimiterData.time.map((option, index) => (
          <button
            key={index}
            className={`
            text-custom-${
              testLimit === option.limit ? `primary` : `secondary`
            } bg-custom-${
              testLimit === option.limit ? `secondary` : `primary`
            } py-2 rounded-md`}
            onClick={() => setTestLimit(option.limit)}
          >
            {option.limit}
          </button>
        ))}
      {testMode === "words" &&
        testSettingLimiterData.words.map((option, index) => (
          <button
            key={index}
            className={`text-custom-${
              testLimit === option.limit ? `primary` : `secondary`
            } bg-custom-${
              testLimit === option.limit ? `secondary` : `primary`
            } py-2 rounded-md`}
            onClick={() => setTestLimit(option.limit)}
          >
            {option.limit}
          </button>
        ))}
      {testMode === "quote" &&
        testSettingLimiterData.quote.map((option, index) => (
          <button
            key={index}
            className={`text-custom-${
              testLimit === option.limit ? `primary` : `secondary`
            } bg-custom-${
              testLimit === option.limit ? `secondary` : `primary`
            } py-2 rounded-md`}
            onClick={() => setTestLimit(option.limit)}
          >
            {option.limit}
          </button>
        ))}
      {testMode === "custom" &&
        testSettingLimiterData.custom.map((option, index) => (
          <button
            key={index}
            className={`text-custom-${
              testLimit === option.limit ? `primary` : `secondary`
            } bg-custom-${
              testLimit === option.limit ? `secondary` : `primary`
            } py-2 rounded-md`}
            onClick={() => setTestLimit(option.limit)}
          >
            {option.limit}
          </button>
        ))}
    </div>
  );
};
