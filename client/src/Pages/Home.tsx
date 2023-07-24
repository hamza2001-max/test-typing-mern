import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";
import { FrameHandler } from "../components/typing/FrameHandler";
import { testSettingsVisibilitySlice } from "../redux/testSettingsVisibilitySlice";
import { themeVisibilitySlice } from "../redux/themeVisibilitySlice";
import { useRedux } from "../hooks/useRedux";

export const Home = () => {
  const { inVisibleTheme } = themeVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
  const {
    testSettingsVSelector,
    themeVSelector,
    isTestFinishedSelector,
    testSettingsVDispatch,
    themeVDispatch,
  } = useRedux();

  return (
    <main
      className={`flex flex-col justify-between ${
        isTestFinishedSelector ? "h-full" : "h-screen"
      }`}
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
        <FrameHandler />
      </div>
      <Footer />
    </main>
  );
};
