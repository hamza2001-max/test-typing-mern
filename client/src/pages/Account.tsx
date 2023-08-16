import { Navigation } from "../components/include/Navigation";
import { Footer } from "../components/include/Footer";
import { Profile } from "../components/account/Profile";
import { PersonalBest } from "../components/account/PersonalBest";
import { HistoryGraphs } from "../components/account/HistoryGraphs";
import { History } from "../components/account/History";
import { useGetData } from "../hooks/useGetData";
export const Account = () => {
  const { data } = useGetData();

  return (
    <section>
      <Navigation />
      <section className="flex flex-col items-center space-y-10">
        <Profile />
        <div className="space-y-10 lg:space-y-0 lg:flex w-[80vw] lg:justify-between">
          <PersonalBest variable={[15, 30, 60, 120]} category="time" accessory="seconds" />
          <PersonalBest variable={[10, 25, 50, 100]} category="words" accessory="words" />
        </div>
        <HistoryGraphs variable={[15, 30, 60, 120]} category="time" deft={30} accessory="sec" />
        <HistoryGraphs variable={[10, 25, 50, 100]} category="words" deft={25} accessory="wds" />
        <HistoryGraphs variable={["all", "short", "medium", "long", "thicc"]} category="quote" deft={"short"}/>
        {data?.length > 0 && <History />}
      </section>
      <Footer />
    </section>
  );
};
