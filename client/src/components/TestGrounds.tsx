import { useSelector } from "react-redux";
import { TestModeWords } from "./TestModeWords";
import { Proto } from "./Proto";
export const TestGrounds = () => {
  const testModeSelector = useSelector(
    (state: { testMode: { testMode: string } }) => state.testMode.testMode
  );
  return <section>{testModeSelector === "words" && <Proto />}</section>;
};
