import { Navigation } from "../components/include/Navigation";
import { Footer } from "../components/include/Footer";
import { Profile } from "../components/account/Profile";
import { PersonalBest } from "../components/account/PersonalBest";
import { Chart } from "../components/account/Chart";
import { History } from "../components/account/History";
export const Account = () => {
  return (
    <section>
      <Navigation />
      <section className="flex flex-col items-center space-y-10">
        <Profile />
        <div className="space-y-10 lg:space-y-0 lg:flex w-[80vw] lg:justify-between">
          <PersonalBest variable={[15, 30, 60, 120]} category="seconds" />
          <PersonalBest variable={[10, 25, 50, 100]} category="words" />
        </div>
        <Chart />
        <History/>
      </section>
      <Footer />
    </section>
  );
};
