import { useDispatch, useSelector } from "react-redux";
import {
  promptVisibilitySlice,
  testSettingsVSlice,
  themeVisibilitySlice,
} from "./redux/visibilitySlice";
import { Home } from "./Pages/Home";
import { RootState } from "./redux/store";

function App() {
  const themeVDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  const { inVisibleTheme } = themeVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVSlice.actions;
  const { inVisibleCustom } = promptVisibilitySlice.actions;

  const theme = useSelector((state: RootState) => state.theme.theme);
  const testSettingsVSelector = useSelector(
    (state: RootState) => state.isTestSettingsVisible.isTestSettingsVisible
  );
  const customPromptVSelector = useSelector(
    (state: RootState) => state.isPromptVisible.isPromptVisible
  );
  const themeVSelector = useSelector((state: RootState) => state.isThemeVisible.isThemeVisible);

  return (
    <div
      className={`${theme} App relative bg-custom-fill`}
      onClick={() => {
        themeVSelector && themeVDispatch(inVisibleTheme());
        testSettingsVSelector && testSettingsVDispatch(inVisibleTS());
        customPromptVSelector && customPromptVDispatch(inVisibleCustom());
      }}
    >
      {(themeVSelector || testSettingsVSelector) && (
        <div className="z-20 absolute w-full h-full bg-custom-fadedBlack"></div>
      )}
      <Home />
    </div>
  );
}

export default App;
