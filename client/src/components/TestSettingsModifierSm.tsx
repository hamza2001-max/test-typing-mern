import { testModifierInterface } from "../types";

export const TestSettingsModifierSm = ({
  title,
  testModifier,
  setTestModifier,
}: testModifierInterface) => {
  return (
    <button
      className={`text-custom-${
        testModifier === title ? "primary" : "secondary"
      } bg-custom-${
        testModifier === title ? "secondary" : "primary"
      } py-2 rounded-md`}
      onClick={() => {
        setTestModifier(testModifier === "" ? title : "");
      }}
    >
      {title}
    </button>
  );
};
