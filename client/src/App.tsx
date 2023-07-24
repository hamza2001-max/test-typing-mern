import { Home } from "./pages/Home";
import { inputStatusSlice } from "./redux/inputStatusSlice";
import { useRedux } from "./hooks/useRedux";

function App() {
  const { inActive } = inputStatusSlice.actions;
  const { isInputActiveSelector, themeSelector, inputStatusDispatch } =
    useRedux();
  return (
    <div
      className={`${themeSelector} App relative bg-custom-fill`}
      onClick={() => isInputActiveSelector && inputStatusDispatch(inActive())}
    >
      <Home />
    </div>
  );
}

export default App;
