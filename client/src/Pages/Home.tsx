import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { TestSettings } from "../components/TestSettings";
import { TestGrounds } from "../components/TestGrounds";
import { TestWordsPrompt } from "../components/TestWordsPrompt";
import { customPromptVSInterface } from "../types";
import { useSelector } from "react-redux";

export const Home = () => {
  const customPromptVSelector = useSelector((state: customPromptVSInterface) =>
  state.customPromptV.customPromptV
  );
  return (
    <main className="h-screen flex flex-col justify-between">
      <div className="space-y-11">
      <Navigation />
      <TestSettings />
      <TestGrounds />
      </div>
      <Footer />
      {customPromptVSelector === true && <TestWordsPrompt/>}
    </main>
  );
};
