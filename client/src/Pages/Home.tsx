import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";
import { TestGrounds } from "../components/typing/TestGrounds";
import { WordsLimiterPrompt } from "../components/typing/WordsLimiterPrompt";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { testSettingsVisibilitySlice } from "../redux/testSettingsVisibilitySlice";
import { promptVisibilitySlice } from "../redux/promptVisibilitySlice";
import { themeVisibilitySlice } from "../redux/themeVisibilitySlice";

export const Home = () => {
  const themeVDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const customPromptVDispatch = useDispatch();

  const { inVisibleTheme } = themeVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
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
      className="flex flex-col justify-between"
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
