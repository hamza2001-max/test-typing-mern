import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { TestSettings } from "../components/TestSettings";
import { TestGrounds } from "../components/TestGrounds";

export const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <div className="space-y-11">
      <Navigation />
      <TestSettings />
      <TestGrounds />
      </div>
      <Footer />
    </main>
  );
};
