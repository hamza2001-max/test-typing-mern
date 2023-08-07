interface PersonalBestInterface {
  category: string;
  variable: number[];
}
export const PersonalBest = ({ category, variable }: PersonalBestInterface) => {
  return (
    <section className="bg-custom-fadedFill text-custom-primary p-5 rounded-lg lg:w-[38vw] grid grid-cols-2 xs:grid-cols-4">
      {variable.map((val, index) => {
        return (
          <div className="flex flex-col items-center" key={index}>
            <span className="text-xs">
              {val} {category}
            </span>
            <span className="text-custom-secondary text-2xl">wpm</span>
            <span className="text-custom-secondary text-lg">accuracy</span>
          </div>
        );
      })}
    </section>
  );
};
