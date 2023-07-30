import { FaCog } from "react-icons/fa";
import { TestSettingsSm } from "./TestSettingsSm";
import { testSettingsVisibilitySlice } from "../../redux/testSettingsVisibilitySlice";
import { TestSettingsMd } from "./TestSettingsMd";
import { useRedux } from "../../hooks/useRedux";

export const TestSettings = () => {
  const { visibleTS } = testSettingsVisibilitySlice.actions;
  const { testSettingsVSelector, testOpacitySelector, testSettingsVDispatch } =
    useRedux();

  return (
    <section
      className={`flex justify-center items-center ${
        !testOpacitySelector && "opacity-0"
      } duration-300 transition-all flex-col`}
    >
      <button
        className="xs:hidden px-8 py-3 rounded-lg flex items-center text-custom-primary bg-custom-fadedFill cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={() => {
          testSettingsVSelector === false && testSettingsVDispatch(visibleTS());
        }}
      >
        <FaCog className="cursor-pointer mr-2" />
        Test Setting
      </button>
      {testSettingsVSelector && <TestSettingsSm />}
      <TestSettingsMd />
    </section>
  );
};
