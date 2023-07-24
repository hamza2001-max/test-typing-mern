import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useRedux = () => {
  const themeSelector = useSelector((state: RootState) => state.theme.theme);
  const testFrameSelector = useSelector(
    (state: RootState) => state.testFrame.testFrame
  );
  const testModifierSelector = useSelector(
    (state: RootState) => state.testModifier.testModifier
  );
  const testLimiterSelector = useSelector(
    (state: RootState) => state.testLimiter.testLimiter
  );
  const themeVSelector = useSelector(
    (state: RootState) => state.isThemeVisible.isThemeVisible
  );
  const testOpacitySelector = useSelector(
    (state: RootState) => state.testOpacity.testOpacity
  );
  const testSettingsVSelector = useSelector(
    (state: RootState) => state.isTestSettingsVisible.isTestSettingsVisible
  );
  const isInputActiveSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );
  const isTestFinishedSelector = useSelector(
    (state: RootState) => state.isTestFinished.isTestFinished
  );

  const themeVDispatch = useDispatch();
  const themeDispatch = useDispatch();
  const testFrameDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const isTestFinishedDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const inputStatusDispatch = useDispatch();
  const testOpacityDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();

  return {
    themeSelector,
    themeVSelector,
    testFrameSelector,
    isInputActiveSelector,
    testOpacitySelector,
    testModifierSelector,
    testLimiterSelector,
    testSettingsVSelector,
    isTestFinishedSelector,
    testSettingsVDispatch,
    testModifierDispatch,
    testFrameDispatch,
    themeDispatch,
    inputStatusDispatch,
    isTestFinishedDispatch,
    themeVDispatch,
    testOpacityDispatch,
    testLimiterDispatch,
  };
};
