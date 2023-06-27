import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { TestGrounds } from "../components/TestGrounds";
import { WordsLimiterPrompt } from "../components/WordsLimiterPrompt";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  promptVisibilitySlice,
  testSettingsVSlice,
  themeVisibilitySlice,
} from "../redux/visibilitySlice";

export const Home = () => {
  const themeVDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  const { inVisibleTheme } = themeVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVSlice.actions;
  const { inVisibleCustom } = promptVisibilitySlice.actions;

  const testSettingsVSelector = useSelector(
    (state: RootState) => state.isTestSettingsVisible.isTestSettingsVisible
  );
  const customPromptVSelector = useSelector(
    (state: RootState) => state.isPromptVisible.isPromptVisible
  );
  const themeVSelector = useSelector(
    (state: RootState) => state.isThemeVisible.isThemeVisible
  );
  const isPromptVisibleSelector = useSelector(
    (state: RootState) => state.isPromptVisible.isPromptVisible
  );

  return (
    <main
      className="h-screen flex flex-col justify-between"
      onClick={() => {
        themeVSelector && themeVDispatch(inVisibleTheme());
        testSettingsVSelector && testSettingsVDispatch(inVisibleTS());
        customPromptVSelector && customPromptVDispatch(inVisibleCustom());
      }}
    >
      {(themeVSelector || testSettingsVSelector || isPromptVisibleSelector) && (
        <div className="z-20 absolute w-full h-full bg-custom-fadedBlack"></div>
      )}
      <div className="space-y-11">
        <Navigation />
        <TestGrounds />
      </div>
      <Footer />
      {isPromptVisibleSelector === true && <WordsLimiterPrompt />}
    </main>
  );
};
