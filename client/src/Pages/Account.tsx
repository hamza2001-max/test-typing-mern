import { Navigation } from "../components/include/Navigation";
import { Footer } from "../components/include/Footer";
import { Profile } from "../components/account/Profile";
import { PersonalBest } from "../components/account/PersonalBest";

export const Account = () => {
  return (
    <section>
      <Navigation />
      <section className="flex flex-col items-center space-y-10">
        <Profile />
        <PersonalBest/>
        <PersonalBest/>
      </section>
      <Footer />
    </section>
  );
};
