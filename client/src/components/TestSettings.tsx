import { FaCog } from "react-icons/fa";
import { testSettingsVisibilityInterface } from "../types";
import { useState } from "react";
import { TestSettingsModifierSm } from "./TestSettingsModifierSm";
import { testSettingModeData, testSettingModifierData } from "../jsonData";
import { TestSettingsModeSm } from "./TestSettingsModeSm";
import { TestSettingLimiterSm } from "./TestSettingLimiterSm";

export const TestSettings = ({
  testSettingsVisibility,
  setTestSettingsVisibility,
}: testSettingsVisibilityInterface) => {
  const [testMode, setTestMode] = useState("words");
  const [testModifier, setTestModifier] = useState("");
  const [testLimit, setTestLimit] = useState<number | string>(25);

  return (
    <section>
      <button
        className="flex items-center text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={() => {
          testSettingsVisibility === false
            ? setTestSettingsVisibility(true)
            : setTestSettingsVisibility(false);
        }}
      >
        <FaCog className="cursor-pointer mr-2" />
        Test Setting
      </button>
      {testSettingsVisibility && (
        <section
          className="w-72 p-4 rounded-xl flex flex-col space-y-6 text-sm bg-custom-fill z-10
        text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-2">
            {testSettingModifierData.map((button) => (
              <TestSettingsModifierSm
                title={button.title}
                testModifier={testModifier}
                setTestModifier={setTestModifier}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {testSettingModeData.map((button) => (
              <TestSettingsModeSm
                title={button.title}
                defaultLimit={button.defaultLimit}
                testMode={testMode}
                setTestMode={setTestMode}
                setTestLimit={setTestLimit}
              />
            ))}
          </div>
          <TestSettingLimiterSm
            testMode={testMode}
            testLimit={testLimit}
            setTestLimit={setTestLimit}
          />
        </section>
      )}
    </section>
  );
};
