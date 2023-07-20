import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";
import { ModeHandler } from "../components/typing/ModeHandler";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { testSettingsVisibilitySlice } from "../redux/testSettingsVisibilitySlice";
import { themeVisibilitySlice } from "../redux/themeVisibilitySlice";

export const Home = () => {
  const themeVDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();

  const { inVisibleTheme } = themeVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;

  const testSettingsVSelector = useSelector(
    (state: RootState) => state.isTestSettingsVisible.isTestSettingsVisible
  );
  const themeVSelector = useSelector(
    (state: RootState) => state.isThemeVisible.isThemeVisible
  );
  const isTestFinishedSelector = useSelector(
    (state: RootState) => state.isTestFinished.isTestFinished
  );

  return (
    <main
      className={`flex flex-col justify-between ${isTestFinishedSelector ? "h-full" : "h-screen"}`}
      onClick={() => {
        themeVSelector && themeVDispatch(inVisibleTheme());
        testSettingsVSelector && testSettingsVDispatch(inVisibleTS());
      }}
    >
      {(themeVSelector || testSettingsVSelector) && (
        <div className="z-20 fixed w-full h-full bg-custom-fadedBlack"></div>
      )}
      <div className="space-y-11">
        <Navigation />
        <ModeHandler />
      </div>
      <Footer />
    </main>
  );
};
