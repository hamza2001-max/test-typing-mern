import { useSelector } from "react-redux";
import { MainFrame } from "./MainFrame";
import { RootState } from "../../redux/store";
export const ModeHandler = () => {
  const testModeSelector = useSelector(
    (state: RootState) => state.testMode.testMode
  );
  return (
    <section>
      <MainFrame />
    </section>
  );
};
