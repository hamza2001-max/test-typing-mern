import React, { useCallback, useEffect, useState } from "react";
import { CalculateResultInterface, resultInterface, wpmArrInterface } from "../types";
import { ResponsiveLine } from "@nivo/line";
// import { CalculateResultInterface } from "../types";

const Result = ({
  textWritten,
  testSentence,
  elapsedTimeArray,
  handleRefreshStatus,
  setHandleRefreshStatus,
}: resultInterface) => {
  const data = [
    { id: "hamza", color: "hsl(6, 70%, 50%)", data: [{ x: 2, y: 23 }] },
    { id: "ali", color: "hsl(148, 70%, 50%)", data: [{ x: 3, y: 24 }] },
    { id: "turi", color: "hsl(148, 70%, 50%)", data: [{ x: 4, y: 25 }] },
  ];

  const [wpmArr, setWpmArr] = useState<wpmArrInterface[]>([]);
  const [result, setResult] = useState({
    wpm: 0,
    accuracy: 0,
    errors: 0,
    extras: 0,
    missed: 0,
    time: 0,
  });
  
  useEffect(() => {
    setResult({ ...result, wpm: (result.wpm /= wpmArr.length) });
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
