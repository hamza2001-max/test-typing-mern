import { FaCog } from "react-icons/fa";
import { TestSettingsSm } from "./TestSettingsSm";
import { useDispatch, useSelector } from "react-redux";
import { testSettingsVisibilitySlice } from "../../redux/testSettingsVisibilitySlice";
import { RootState } from "../../redux/store";
import { TestSettingsMd } from "./TestSettingsMd";

export const TestSettings = () => {
  const testSettingsVSelector = useSelector(
    (state: RootState) => state.isTestSettingsVisible.isTestSettingsVisible
  );
  const testSettingsVDispatch = useDispatch();
  const { visibleTS } = testSettingsVisibilitySlice.actions;

  return (
    <section className="flex justify-center items-center flex-col">
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
      <TestSettingsMd/>
    </section>
  );
};
