import { useSelector } from "react-redux";
import { Test } from "./Test";
import { RootState } from "../redux/store";
import { TestSettings } from "./TestSettings";
export const TestGrounds = () => {
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );
  return (
    <section className="space-y-11">
      <TestSettings />
      {testModeSelector === "words" && <Test />}
    </section>
  );
};
