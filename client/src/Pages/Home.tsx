import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";
import { FrameHandler } from "../components/home/FrameHandler";
import { testSettingsVisibilitySlice } from "../redux/testSettingsVisibilitySlice";
import { useRedux } from "../hooks/useRedux";
import { inputStatusSlice } from "../redux/inputStatusSlice";

export const Home = () => {
  const { inActive } = inputStatusSlice.actions;
  const { inVisibleTS } = testSettingsVisibilitySlice.actions;
  const {
    isInputActiveSelector,
    testSettingsVSelector,
    isTestFinishedSelector,
    testSettingsVDispatch,
    inputStatusDispatch,
  } = useRedux();

  return (
    <main
      className={`flex flex-col justify-between ${isTestFinishedSelector ? "h-full" : "h-screen"
        }`}
      onClick={() => {
        testSettingsVSelector && testSettingsVDispatch(inVisibleTS());
        isInputActiveSelector && inputStatusDispatch(inActive());
      }}
    >
      {testSettingsVSelector && (
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
