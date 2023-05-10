import { useSelector } from "react-redux";
import { TestModeWords } from "./TestModeWords";
export const TestGrounds = () => {
  const testModeSelector = useSelector(
    (state: { testMode: { testMode: string } }) => state.testMode.testMode
  );
  const testModifierSelector = useSelector(
    (state: { testModifier: { testModifier: string } }) =>
      state.testModifier.testModifier
  );
  const testLimiterSelector = useSelector(
    (state: { testLimiter: { testLimiter: string } }) =>
      state.testLimiter.testLimiter
  );
  return (
    <section>
      {testModeSelector === "words" && <TestModeWords />}
    </section>
  );
};
