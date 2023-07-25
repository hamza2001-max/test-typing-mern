import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";
import { FrameHandler } from "../components/typing/FrameHandler";
import { testSettingsVisibilitySlice } from "../redux/testSettingsVisibilitySlice";
import { themeVisibilitySlice } from "../redux/themeVisibilitySlice";
import { useRedux } from "../hooks/useRedux";
import { isCusLimVisibilitySlice } from "../redux/cusLimVisibility";

export const Home = () => {
  const { inVisibleTheme } = themeVisibilitySlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
  const { inVisibleCus } = isCusLimVisibilitySlice.actions;
  const {
    isCusLimVisibleSelector,
    testSettingsVSelector,
    themeVSelector,
    isTestFinishedSelector,
    testSettingsVDispatch,
    themeVDispatch,
    isCusLimVisibleDispatch,
  } = useRedux();

  return (
    <main
      className={`flex flex-col justify-between ${
        isTestFinishedSelector ? "h-full" : "h-screen"
      }`}
      onClick={() => {
        themeVSelector && themeVDispatch(inVisibleTheme());
        testSettingsVSelector && testSettingsVDispatch(inVisibleTS());
        isCusLimVisibleSelector && isCusLimVisibleDispatch(inVisibleCus());
      }}
    >
      {(themeVSelector || testSettingsVSelector || isCusLimVisibleSelector) && (
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
