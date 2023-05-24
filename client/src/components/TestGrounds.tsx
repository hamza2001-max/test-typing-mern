import { useSelector } from "react-redux";
import { Test } from "./Test";
export const TestGrounds = () => {
  const testModeSelector = useSelector(
    (state: { testMode: { testMode: string } }) => state.testMode.testMode
  );
  return <section>{testModeSelector === "words" && <Test />}</section>;
};
