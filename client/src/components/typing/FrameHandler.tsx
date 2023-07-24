import { MainFrame } from "./MainFrame";
import { TestSettings } from "../settings/TestSettings";
import { ZenFrame } from "./ZenFrame";
import { CustomFrame } from "./CustomFrame";
import { useRedux } from "../../hooks/useRedux";

const getFrameComponent = (testModeSelector: string) => {
  switch (testModeSelector) {
    case "words":
    case "time":
    case "quote":
      return <MainFrame />;
    case "zen":
      return <ZenFrame />;
    case "custom":
      return <CustomFrame />;
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
