import { TestSettings } from "./TestSettings";
import {TypingSpeedTest} from "./Test";

export const Main = () => {
  return (
    <section className="flex flex-col items-center">
      <TestSettings/>
      <TypingSpeedTest/>
    </section>
  );
};
