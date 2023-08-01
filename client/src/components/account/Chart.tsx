import { useState } from "react";
import { LineChart } from "../include/LineChart";
import { DataInterface } from "../../typescript/types";

export const Chart = () => {
  const [data, ] = useState<DataInterface[]>([
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
  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="w-[80vw] flex justify-between">
          <button>15 seconds</button>
          <button>30 seconds</button>
          <button>60 seconds</button>
          <button>120 seconds</button>
        </div>
        <LineChart data={data} xLegend="Iteration Of Tests"/>
      </div>
      <div>
        <div className="w-[80vw] flex justify-between">
          <button>10 words</button>
          <button>25 words</button>
          <button>50 words</button>
          <button>100 words</button>
        </div>
        <LineChart data={data} xLegend="Iteration Of Tests"/>
      </div>
    </div>
  );
};
