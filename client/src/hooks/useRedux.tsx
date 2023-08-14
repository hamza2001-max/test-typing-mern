import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useRedux = () => {
  const themeSelector = useSelector((state: RootState) => state.theme.theme);
  const authSelector = useSelector((state: RootState) => state.auth.user);
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
    (state: RootState) => state.isTestSetVisible.isTestSettingsVisible
  );
  const isInputActiveSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );
  const isTestFinishedSelector = useSelector(
    (state: RootState) => state.isTestFinished.isTestFinished
  );
  const isCusLimVisibleSelector = useSelector(
    (state: RootState) => state.isCusLimVisible.isCusLimVisible
  );

  const authDispatch = useDispatch();
  const themeVDispatch = useDispatch();
  const isCusLimVisibleDispatch = useDispatch();
  const themeDispatch = useDispatch();
  const testFrameDispatch = useDispatch();
  const userTimeDispatch = useDispatch();
  const testModifierDispatch = useDispatch();
  const isTestFinishedDispatch = useDispatch();
  const testCplDispatch = useDispatch();
  const testLimiterDispatch = useDispatch();
  const inputStatusDispatch = useDispatch();
  const testOpacityDispatch = useDispatch();
  const testSettingsVDispatch = useDispatch();
  const testStdDispatch = useDispatch();

  return {
    themeVSelector,
    isCusLimVisibleSelector,
    testFrameSelector,
    themeSelector,
    isInputActiveSelector,
    testOpacitySelector,
    authSelector,
    testModifierSelector,
    testLimiterSelector,
    testSettingsVSelector,
    isTestFinishedSelector,
    testSettingsVDispatch,
    authDispatch,
    testModifierDispatch,
    testFrameDispatch,
    themeDispatch,
    inputStatusDispatch,
    testStdDispatch,
    isTestFinishedDispatch,
    themeVDispatch,
    isCusLimVisibleDispatch,
    testOpacityDispatch,
    userTimeDispatch,
    testCplDispatch,
    testLimiterDispatch,
  };
};
