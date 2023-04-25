import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer/>
      {/* <h1 className="p-6 text-lg">hello</h1> */}
    </div>
  );
}

export default App;
