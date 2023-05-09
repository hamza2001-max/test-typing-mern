import { FaCog } from "react-icons/fa";
import { testSettingsVisibilityInterface } from "../types";
import { TestSettingsModeSm } from "./TestSettingsModeSm";

export const TestSettings = ({
  testSettingsVisibility,
  setTestSettingsVisibility,
}: testSettingsVisibilityInterface) => {
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
          className="w-72 p-4 rounded-xl flex flex-col text-sm bg-custom-fill z-10
        text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <TestSettingsModeSm />
        </section>
      )}
    </section>
  );
};
