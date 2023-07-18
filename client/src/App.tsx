import { useDispatch, useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { RootState } from "./redux/store";
import { inputStatusSlice } from "./redux/inputStatusSlice";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { inActive } = inputStatusSlice.actions;

  const inputStatusDispatch = useDispatch();
  const isInputActiveSelector = useSelector(
    (state: RootState) => state.isInputActive.isInputActive
  );
  return (
    <div
      className={`${theme} App relative bg-custom-fill`}
      onClick={() => isInputActiveSelector && inputStatusDispatch(inActive())}
    >
      <Home />
    </div>
  );
}

export default App;
