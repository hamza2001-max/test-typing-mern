import { FaCog } from "react-icons/fa";
// import { testSettingsVInterface } from "../types";
import { TestSettingsSm } from "./TestSettingsSm";
import { useDispatch, useSelector } from "react-redux";
import { testSettingsVSlice } from "../redux/visibilitySlice";
import { RootState } from "../redux/store";

export const TestSettings = () => {
  const testSettingsVSelector = useSelector(
    (state: RootState) => state.isTestSettingsVisible.isTestSettingsVisible
  );
  const testSettingsVDispatch = useDispatch();
  const { visibleTS } = testSettingsVSlice.actions;

  return (
    <section className="flex justify-center items-center flex-col">
      <button
        className="flex items-center text-custom-primary cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
        onClick={() => {
          testSettingsVSelector === false && testSettingsVDispatch(visibleTS());
        }}
      >
        <FaCog className="cursor-pointer mr-2" />
        Test Setting
      </button>
      {testSettingsVSelector && <TestSettingsSm />}
    </section>
  );
};
