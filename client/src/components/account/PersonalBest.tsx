export const PersonalBest = () => {
  return (
    <section className="bg-custom-fadedFill text-custom-primary p-5 mx-7 rounded-lg w-[80vw] grid grid-cols-2">
      <div className="flex flex-col items-center">
        <span className="text-xs">15 seconds</span>
        <span className="text-custom-secondary text-3xl">wpm</span>
        <span className="text-custom-secondary text-xl">accuracy</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs">30 seconds</span>
        <span className="text-custom-secondary text-3xl">wpm</span>
        <span className="text-custom-secondary text-xl">accuracy</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs">60 seconds</span>
        <span className="text-custom-secondary text-3xl">wpm</span>
        <span className="text-custom-secondary text-xl">accuracy</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs">120 seconds</span>
        <span className="text-custom-secondary text-3xl">wpm</span>
        <span className="text-custom-secondary text-xl">accuracy</span>
      </div>
    </section>
  );
};
