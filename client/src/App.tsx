import { Route, Routes } from "react-router-dom";
import { useRedux } from "./hooks/useRedux";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Account } from "./pages/Account";

function App() {
  const { themeSelector } = useRedux();
  return (
    <div className={`${themeSelector} App relative bg-custom-fill`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
