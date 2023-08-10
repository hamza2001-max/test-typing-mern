import { useState } from "react";
import { LineChart } from "../include/LineChart";
import { IData } from "../../types";

export const Chart = () => {
  const [data,] = useState<IData[]>([
    {
      id: "value",
      data: [
        {
          x: 1,
          y: 32,
        },
        {
          x: 2,
          y: 45,
        },
        {
          x: 3,
          y: 12,
        },
        {
          x: 4,
          y: 67,
        },
      ],
    },
  ]);
  const [LCSecondsType, setLCSecondsType] = useState("30");
  const [LCWordsType, setLCWordsType] = useState("25");
  const handleSecondsBtn = (val: string) => {
    setLCSecondsType(val);
  }
  const handleWordsBtn = (val: string) => {
    setLCWordsType(val);
  }
  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="flex flex-col items-center">
        <div className="w-96 flex justify-between">
          <button onClick={() => handleSecondsBtn("15")} className={`rounded-lg px-2 py-0.5 
            ${LCSecondsType === "15" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`} >15 sec</button>
          <button onClick={() => handleSecondsBtn("30")} className={`rounded-lg px-2 py-0.5 
            ${LCSecondsType === "30" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}>30 sec</button>
          <button onClick={() => handleSecondsBtn("60")} className={`rounded-lg px-2 py-0.5 
            ${LCSecondsType === "60" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}>60 sec</button>
          <button onClick={() => handleSecondsBtn("120")} className={`rounded-lg px-2 py-0.5 
            ${LCSecondsType === "120" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}>120 sec</button>
        </div>
        {LCSecondsType === "30" && <LineChart data={data} xLegend="Iteration Of Tests" />}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-96 flex justify-between">
        <button onClick={() => handleWordsBtn("10")} className={`rounded-lg px-2 py-0.5 
            ${LCWordsType === "10" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`} >10 wrd</button>
          <button onClick={() => handleWordsBtn("25")} className={`rounded-lg px-2 py-0.5 
            ${LCWordsType === "25" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}>25 wrd</button>
          <button onClick={() => handleWordsBtn("50")} className={`rounded-lg px-2 py-0.5 
            ${LCWordsType === "50" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}>50 wrd</button>
          <button onClick={() => handleWordsBtn("100")} className={`rounded-lg px-2 py-0.5 
            ${LCWordsType === "100" ? "text-custom-fill bg-custom-tertiary" : "text-custom-secondary bg-custom-fadedFill"}
            hover:bg-custom-secondary hover:text-custom-primary transition ease-in-out delay-75`}>100 wrd</button>
        </div>
        {LCWordsType === "25" && <LineChart data={data} xLegend="Iteration Of Tests" />}
      </div>
    </div>
  );
};
