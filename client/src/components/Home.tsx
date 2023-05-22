import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { TestSettings } from "./TestSettings";
import { TestGrounds } from "./TestGrounds";

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
