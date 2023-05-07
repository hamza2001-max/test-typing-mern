import { useSelector } from "react-redux";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { themeInterface } from "./types";
import { useState } from "react";
import { TestSettings } from "./components/TestSettings";
import { TypingSpeedTest } from "./components/Test";

function App() {
  const theme = useSelector((state: themeInterface) => state.theme);
  const [themeVisibility, setThemeVisibility] = useState(false);
  const [testSettingsVisibility, setTestSettingsVisibility] = useState(false);

  return (
    <div
      className={`${theme} App relative bg-custom-fill`}
      onClick={() => {
        themeVisibility === true && setThemeVisibility(false);
        testSettingsVisibility === true && setTestSettingsVisibility(false);
      }}
    >
      <Navigation />
      <section className="flex flex-col items-center">
        <TestSettings
          testSettingsVisibility={testSettingsVisibility}
          setTestSettingsVisibility={setTestSettingsVisibility}
        />
        <TypingSpeedTest />
      </section>
      <Footer
        themeVisibility={themeVisibility}
        setThemeVisibility={setThemeVisibility}
      />
    </div>
  );
}

export default App;
