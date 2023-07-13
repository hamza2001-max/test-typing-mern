import { useSelector } from "react-redux";
import { Test } from "./Test";
import { RootState } from "../../redux/store";
export const TestGrounds = () => {
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );
  return (
    <section>
      {testModeSelector === "words" && <Test />}
    </section>
  );
};
