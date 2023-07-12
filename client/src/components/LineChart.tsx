import { ResponsiveLine } from "@nivo/line";
import { dataInterface } from "../typescript/types";

export const LineChart = ({ data }: { data: dataInterface[] }) => {
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
    <div className="h-96 " style={{ width: "90vw" }}>
      <ResponsiveLine
        data={data}
        theme={theme}
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
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Time in seconds",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Word Per Minute",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={["var(--color-tertiary)"]}
        pointSize={5}
        pointColor={{ from: "color", modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        motionConfig="wobbly"
      />
    </div>
  );
};
