import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";

export const About = () => {
  return (
    <section className="flex flex-col justify-between h-screen">
      <Navigation />
      <section className="xl:px-52">
        <div className="flex flex-col items-center text-custom-primary mb-12">
          <span>Its a website to check your wpm.</span>
          <span>A copy of monkeyType.</span>
          <span>By Hamza.</span>
        </div>
        <div className="px-10 space-y-5 mb-5">
          <div>
            <span className="text-custom-primary text-3xl">about</span>
            <p className="mt-5 text-custom-secondary">
              modes, an account system to save your typing speed history, and
              user-configurable features such as themes, sounds, a smooth caret,
              and more. Test yourself in various modes, track your progress and
              improve your speed.
            </p>
          </div>
          <div>
            <span className="text-custom-primary">word set</span>
            <p className="mt-2 text-custom-secondary">
              By default, this website uses the most common 200 words in the
              English language to generate its tests.
            </p>
          </div>
          <div>
            <span className="text-custom-primary">stats</span>
            <p className="mt-2 text-custom-secondary">
              wpm - total amount of characters in the typed words (including
              spaces), divided by 5 and normalised to 60 seconds.
            </p>
            <p className=" text-custom-secondary">acc - percentage of correctly pressed keys.</p>
          </div>
        </div>
      </section>
        <Footer />
    </section>
  );
};
