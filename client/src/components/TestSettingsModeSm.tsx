import { testModeInterface } from "../types";

export const TestSettingsModeSm = ({
  title,
  defaultLimit,
  testMode,
  setTestMode,
  setTestLimit,
}: testModeInterface) => {
  return (
    <button
      className={`text-custom-${
        testMode === title ? `primary` : `secondary`
      } bg-custom-${
        testMode === title ? `secondary` : `primary`
      } py-2 rounded-md`}
      onClick={() => {
        setTestMode(title);
        defaultLimit &&
        setTestLimit(defaultLimit);
      }}
    >
      {title}
    </button>
  );
};
