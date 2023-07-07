import React from "react";
import { CalculateResultInterface } from "../types";
import { ResponsiveLine } from "@nivo/line";

const Result = ({
  wpm,
  accuracy,
  time,
  correctChars,
  incorrectChars,
  missed,
  extras,
}: CalculateResultInterface) => {
  const data = [
    { id: "hamza", color: "hsl(6, 70%, 50%)", data: [{ x: 2, y: 23 }] },
    { id: "ali", color: "hsl(148, 70%, 50%)", data: [{ x: 3, y: 24 }] },
    { id: "turi", color: "hsl(148, 70%, 50%)", data: [{ x: 4, y: 25 }] },
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex items-center justify-center">
        <div>
          <span>wpm {wpm}</span>
          <br />
          <span>accuracy {accuracy}</span>
        </div>
        <div className="h-96 " style={{ width: "70vw" }}>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            colors={{ scheme: "nivo" }}
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            areaBaselineValue={40}
            areaOpacity={0.1}
            useMesh={true}
            legends={[]}
            motionConfig="wobbly"
          />
        </div>
      </div>
      <span>time {time}</span>
      <br />
      <span>correctChars {correctChars}</span>
      <br />
      <span>incorrectChars {incorrectChars}</span>
      <br />
      <span>missed {missed}</span>
      <br />
      <span>extras {extras}</span>
    </section>
  );
};

export default Result;
