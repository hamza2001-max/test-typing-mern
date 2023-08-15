import { useCallback, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { IData, IHistoryGraphs, IwpmRow } from "../../types";
import { useEffect } from "react";
import { LineChart } from "../include/LineChart";

export const HistoryGraphs = ({ variable, category, deft, accessory }: IHistoryGraphs) => {
  const [limiter, setLimiter] = useState<string | number>(deft);
  const { data } = useGetData();
  const [subset, setSubset] = useState<IData[]>([
    {
      id: "subset",
      data: []
    }
  ])

  const getSubset = useCallback(() => {
    let index = 0;
    let datatype = {
      x: 0,
      y: 0
    }

    let accInit: typeof datatype[] = [];
    if (data) {
      variable.forEach((val) => {
        if (limiter === val) {
          setSubset([
            {
              id: "subset",
              data: data.reduce((acc: typeof accInit, wpmRow: IwpmRow) => {
                if (wpmRow.limiter === limiter && wpmRow.mode === category) {
                  acc.push({
                    x: index,
                    y: wpmRow.wpm
                  })
                  ++index;
                }
                return acc;
              }, accInit)
            }
          ])
        }
      });
    }
  }, [category, data, limiter, variable])

  const handleBtn = (val: number|string) => {
    setLimiter(val);
  }

  useEffect(() => {
    getSubset();
  }, [limiter, getSubset])

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="flex flex-col items-center">
        <div className="w-96 flex justify-between">
          {
            variable.map((val, index) => {
              return (
                <button onClick={() => handleBtn(val)} key={index} className={`rounded-lg px-2 py-0.5 
            ${val === limiter ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`} >{val} {accessory}</button>
              )
            })
          }
        </div>

        {subset[0].data.length > 1 ? <LineChart data={subset} xLegend="Iteration Of Tests" /> : <span className="text-custom-tertiary mt-5 px-5">No Sufficient data, There must be at least 2 records.</span>}
      </div>
    </div>
  );
};
