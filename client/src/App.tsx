import { useDispatch, useSelector } from "react-redux";
import {
  customPromptVSlice,
  testSettingsVSlice,
  themeVSlice,
} from "./redux/visibilitySlice";
import {
  customPromptVSInterface,
  testSettingsVInterface,
  themeInterface,
  themeVInterface,
} from "./types";

import { Home } from "./components/Home";

function App() {
  const themeVDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  const { inVisibleTheme } = themeVSlice.actions;
  const { inVisibleTS } = testSettingsVSlice.actions;
  const { inVisibleCustom } = customPromptVSlice.actions;

  const theme = useSelector((state: themeInterface) => state.theme.theme);
  const testSettingsVSelector = useSelector(
    (state: testSettingsVInterface) => state.testSettingsV.testSettingsV
  );
  const customPromptVSelector = useSelector(
    (state: customPromptVSInterface) => state.customPromptV.customPromptV
  );
  const themeVSelector = useSelector(
    (state: themeVInterface) => state.themeV.themeV
  );

  return (
    <div
      className={`${theme} App relative bg-custom-fill`}
      onClick={() => {
        themeVSelector === true && themeVDispatch(inVisibleTheme());
        testSettingsVSelector === true && testSettingsVDispatch(inVisibleTS());
        customPromptVSelector === true &&
          customPromptVDispatch(inVisibleCustom());
      }}
    >
     <Home/>
    </div>
  );
}

export default App;
