import { useSelector } from "react-redux";
import { TestModeWords } from "./TestModeWords";
export const TestGrounds = () => {
  const testModeSelector = useSelector(
    (state: { testMode: { testMode: string } }) => state.testMode.testMode
  );

  return <section>{testModeSelector === "words" && <TestModeWords />}</section>;
};
