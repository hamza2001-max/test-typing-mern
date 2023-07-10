import { useCallback, useEffect, useState } from "react";
import {
  CalculateResultInterface,
  resultInterface,
  wpmArrInterface,
} from "../types";
import { ResponsiveLine } from "@nivo/line";
// import { StringLiteral } from "typescript";
import tailwindConfig from '../../tailwind.config.js';
// import "../../tailwind.d.ts";
// interface TailwindColors {
//   [key: string]: string;
// }

// interface TailwindTheme {
//   textColor: {
//     [key: string]: TailwindColors;
//   };
// }

// interface TailwindConfig {
//   theme: TailwindTheme;
// }
interface axisInterface {
  x: number;
  y: number;
}

interface dataInterface {
  id: string;
  color: string;
  data: axisInterface[];
}

const Result = ({
  textWritten,
  testSentence,
  elapsedTimeArray,
  handleRefreshStatus,
  setHandleRefreshStatus,
}: resultInterface) => {
  const [wpmArr, setWpmArr] = useState<wpmArrInterface[]>([]);
  const [result, setResult] = useState({
    wpm: 0,
    accuracy: 0,
    errors: 0,
    extras: 0,
    missed: 0,
    time: 0,
  });

  const [data, setData] = useState<dataInterface[]>([]);
  // const data:number[] = [];

  console.log(wpmArr);
  
  useEffect(() => {
    setData([
      // ...prev,
      {
        id: "Current Test",
        color: "hsl(0, 100%, 50%)",
        data: wpmArr.map((element, index) => ({ x: index, y: element.wpm })),
      },
    ]);
  }, [wpmArr]);

  useEffect(() => {
    setResult({ ...result, wpm: Math.round((result.wpm /= wpmArr.length)) });
  }, [wpmArr, setResult]);

  const handleRefresh = useCallback(() => {
    setWpmArr([]);
    setResult({
      wpm: 0,
      accuracy: 0,
      errors: 0,
      extras: 0,
      missed: 0,
      time: 0,
    });
    setHandleRefreshStatus(false);
  }, [setHandleRefreshStatus]);

  useEffect(() => {
    handleRefreshStatus && handleRefresh();
  }, [handleRefreshStatus, handleRefresh]);

  const calculateResult = useCallback((): CalculateResultInterface => {
    let resultantWpm = 0;
    let resultantErrors = 0;
    let resultantTime = 0;
    let correctWords = 0;
    let extras = 0;
    let missed = 0;

    const textWrittenArray = textWritten.split(" ");
    const testSentenceArray = testSentence.split(" ");
    textWrittenArray.pop();

    const resultant = textWrittenArray.reduce(
      (acc, word, index) => {
        let correctChars = 0;
        let errors = 0;
        if (word === testSentenceArray[index]) {
          acc.correctWords++;
          correctChars += word.length;
        } else {
          if (word.length > testSentenceArray[index].length) {
            acc.extras += word.length - testSentenceArray[index].length;
          } else if (word.length < testSentenceArray[index].length) {
            acc.missed += testSentenceArray[index].length - word.length;
          }
          for (let j = 0; j < testSentenceArray[index].length; j++) {
            if (testSentenceArray[index][j] !== word[j]) {
              errors++;
            } else {
              correctChars++;
            }
          }
        }

        let wpm = Math.round(
          ((word.length + 1 - errors) / 5 / elapsedTimeArray[index]) * 60
        );
        resultantWpm += wpm;
        resultantErrors += errors;
        resultantTime += elapsedTimeArray[index];
        setWpmArr((prev) => [
          ...prev,
          {
            word,
            wpm,
            errors,
            correctChars,
            time: elapsedTimeArray[index],
          },
        ]);

        return acc;
      },
      { correctWords, extras, missed }
    );

    let accuracy = (resultant.correctWords / testSentenceArray.length) * 100;
    extras = resultant.extras;
    missed = resultant.missed;
    return {
      wpm: resultantWpm,
      errors: resultantErrors,
      time: Number(resultantTime.toFixed(2)),
      accuracy,
      extras,
      missed,
    };
  }, [elapsedTimeArray, testSentence, textWritten]);

  useEffect(() => {
    if (textWritten.split(" ").length - 1 === testSentence.split(" ").length) {
      setResult(calculateResult());
    }
  }, [textWritten, testSentence, calculateResult, setResult]);

  // const textColorCustom: TailwindColors = tailwindConfig.theme?.textColor?.custom;
// const customColors: string[] = Object.values(textColorCustom);
  // const customColors = [tailwindConfig.theme?.extend?.textColor]
  // const customColors = [tailwindConfig.theme?.colors?.blue[500],]
  // const customColors = [
  //   tailwindConfig.theme?.get('extend.textColor.custom.secondary')
  // ];
  
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex items-center justify-center">
        <div>
          <span>wpm {result.wpm}</span>
          <br />
          <span>accuracy {result.accuracy}</span>
        </div>
        <div className="h-96 " style={{ width: "70vw" }}>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time in seconds',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Word Per Minute',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={['#ff0000', '#222222']}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        motionConfig="wobbly"
    />
        </div>
      </div>
      <span>time {result.time}</span>
      <br />
      <span>incorrectChars {result.errors}</span>
      <br />
      <span>missed {result.missed}</span>
      <br />
      <span>extras {result.extras}</span>
      <button></button>
    </section>
  );
};

export default Result;
