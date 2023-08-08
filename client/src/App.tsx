import { Route, Routes } from "react-router-dom";
import { useRedux } from "./hooks/useRedux";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Auth } from "./pages/Auth";
import { Account } from "./pages/Account";
import { themeVisibilitySlice } from "./redux/themeVisibilitySlice";

function App() {
  const { themeSelector, themeVSelector, themeVDispatch } = useRedux();
  const { inVisibleTheme } = themeVisibilitySlice.actions;

  return (
    <div className={`${themeSelector} App relative bg-custom-fill`} onClick={() =>
      themeVSelector && themeVDispatch(inVisibleTheme())

    }>
      {(themeVSelector) && (
        <div className="z-20 fixed w-full h-full bg-custom-fadedBlack"></div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
