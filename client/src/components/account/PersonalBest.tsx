import { useGetData } from "../../hooks/useGetData";
import { IPersonalBest, IwpmRow } from "../../types";

export const PersonalBest = ({ category, variable, accessory }: IPersonalBest) => {
  const { data } = useGetData();
  const accInit = {
    wpm: 0,
    accuracy: 0
  }

  const highestWpmSeparator = () => {
    let highestWpms: typeof accInit[] = [];
    if (data) {
      variable.forEach((limit, index) => {
        highestWpms[index] = data.reduce((acc: typeof accInit, wpmRow: IwpmRow) => {
          if ((wpmRow.mode === category && wpmRow.limiter === limit) && (wpmRow.wpm > acc.wpm && wpmRow.accuracy > acc.accuracy)) {
            return { wpm: wpmRow.wpm, accuracy: wpmRow.accuracy };
          }
          return acc;
        }, accInit);
      })
    }
    return highestWpms
  }

  return (
    <section className="bg-custom-fadedFill text-custom-primary p-5 rounded-lg lg:w-[38vw] grid grid-cols-2 xs:grid-cols-4">
      {variable.map((val, index) => {
        return (
          <div className="flex flex-col items-center" key={index}>
            <span className="text-xs">
              {val} {accessory}
            </span>
            <span className="text-custom-secondary text-2xl">{highestWpmSeparator()[index] && (highestWpmSeparator()[index].wpm === 0 ? "-" : highestWpmSeparator()[index].wpm)}</span>
            <span className="text-custom-secondary text-lg">{highestWpmSeparator()[index] && (highestWpmSeparator()[index].accuracy === 0 ? "-" : highestWpmSeparator()[index].accuracy + "%")}</span>
          </div>
        );
      })}
    </section>
  );
};
