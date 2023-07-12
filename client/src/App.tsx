import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { RootState } from "./redux/store";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`${theme} App relative bg-custom-fill h-screen `}>
      <Home />
    </div>
  );
}

export default App;
