import { ResponsiveLine } from "@nivo/line";
import { ILineChart } from "../../types";
import { useMediaQuery } from "react-responsive";

export const LineChart = ({ data, xLegend }:ILineChart) => {
  const isBreakpointMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const theme = {
    grid: {
      line: {
        stroke: "var(--color-primary)",
      },
    },
    axis: {
      legend: {
        text: {
          fontSize: 14,
          fill: "var(--color-primary)",
        },
      },
      ticks: {
        line: {
          stroke: "var(--color-primary)",
          strokeWidth: 1,
        },
        text: {
          fontSize: 14,
          fill: "var(--color-primary)",
          outlineWidth: 0,
        },
      },
    },
  };
  return (
    <div className="h-96 w-[90vw] sm:w-[65vw] md:w-[75vw]">
      <ResponsiveLine
        data={data}
        theme={theme}
        margin={{ top: 30, right: 25, bottom: 50, left: 60 }}
        xScale={{ type: "linear" }}
        lineWidth={isBreakpointMedium ? 2 : 1.3}
        pointSize={isBreakpointMedium ? 6 : 4}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="natural"
        axisBottom={{
          tickValues: 10,
          tickPadding: 5,
          legend: xLegend,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Word Per Minute",
          legendOffset: -55,
          legendPosition: "middle",
        }}
        colors={["var(--color-tertiary)"]}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        motionConfig="wobbly"
      />
    </div>
  );
};
