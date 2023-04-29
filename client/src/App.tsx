import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";
import { useState } from "react";



function App() {
  const [themeVisiblity, setThemeVisibility] = useState(false);
  const [theme, setTheme] = useState<string>("");

  return (
    <div className= {`${theme} App relative bg-custom-fill`}>
      <Navigation/>
      <Main/>
      <button 
      className="text-custom-primary"
      onClick={() => setThemeVisibility(!themeVisiblity)}>
          theme
        </button>
      {themeVisiblity && (
          <div className="flex flex-col bg-white absolute top-0 right-0">
            <button onClick={() => setTheme("")}>light</button>
            <button onClick={() => setTheme("dark")}>dark</button>
            <button onClick={() => setTheme("")}>80's after dark</button>
          </div>
        )}
      <Footer/>
      {/* <h1 className="p-6 text-lg">hello</h1> */}
    </div>
  );
}

export default App;
