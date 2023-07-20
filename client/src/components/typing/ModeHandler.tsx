import { useSelector } from "react-redux";
import { MainFrame } from "./MainFrame";
import { RootState } from "../../redux/store";
import { TestSettings } from "../settings/TestSettings";
import { ZenMode } from "./ZenMode";
import { CustomMode } from "./CustomMode";

const getModeComponent = (testModeSelector: string) => {
  switch (testModeSelector) {
    case "words":
    case "time":
    case "quote":
      return <MainFrame />;
    case "zen":
      return <ZenMode />;
    case "custom":
      return <CustomMode />;
    default:
      return null;
  }
};

export const ModeHandler = () => {
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );

  return (
    <section className="space-y-16">
      <TestSettings />
      {getModeComponent(testModeSelector)}
    </section>
  );
};
