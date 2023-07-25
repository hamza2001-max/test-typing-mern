import { MainFrame } from "./MainFrame";
import { TestSettings } from "../settings/TestSettings";
import { ZenFrame } from "./ZenFrame";
import { useRedux } from "../../hooks/useRedux";

const getFrameComponent = (testModeSelector: string) => {
  switch (testModeSelector) {
    case "words":
    case "time":
    case "quote":
    case "custom":
      return <MainFrame />;
    case "zen":
      return <ZenFrame />;
    default:
      return null;
  }
};

export const FrameHandler = () => {
  const {testFrameSelector} = useRedux();
  return (
    <section className="space-y-16">
      <TestSettings />
      {getFrameComponent(testFrameSelector)}
    </section>
  );
};
