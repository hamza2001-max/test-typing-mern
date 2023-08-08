import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";
import { FrameHandler } from "../components/home/FrameHandler";
import { testSettingsVisibilitySlice } from "../redux/testSettingsVisibilitySlice";
import { useRedux } from "../hooks/useRedux";
import { isCusLimVisibilitySlice } from "../redux/cusLimVisibility";
import { inputStatusSlice } from "../redux/inputStatusSlice";

export const Home = () => {
  const { inActive } = inputStatusSlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
  const { inVisibleCus } = isCusLimVisibilitySlice.actions;
  const {
    isCusLimVisibleSelector,
    isInputActiveSelector,
    testSettingsVSelector,
    isTestFinishedSelector,
    testSettingsVDispatch,
    isCusLimVisibleDispatch,
    inputStatusDispatch,
  } = useRedux();

  return (
    <main
      className={`flex flex-col justify-between ${
        isTestFinishedSelector ? "h-full" : "h-screen"
      }`}
      onClick={() => {
        testSettingsVSelector && testSettingsVDispatch(inVisibleTS());
        isCusLimVisibleSelector && isCusLimVisibleDispatch(inVisibleCus());
        isInputActiveSelector && inputStatusDispatch(inActive());
      }}
    >
      {( testSettingsVSelector || isCusLimVisibleSelector) && (
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
