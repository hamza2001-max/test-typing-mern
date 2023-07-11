import { useCallback, useEffect, useState } from "react";
import {
  CalculateResultInterface,
  dataInterface,
  ResultInterface,
  WpmArrInterface,
} from "../typescript/types";
import { LineChart } from "./LineChart";
import { Tooltip } from "./Tooltip";
// import { Tooltip, TooltipTrigger, TooltipContent } from "@tailwindcss/react";

const Result = ({
  textWritten,
  testSentence,
  elapsedTimeArray,
  handleRefreshStatus,
  setHandleRefreshStatus,
}: ResultInterface) => {
  const [wpmArr, setWpmArr] = useState<WpmArrInterface[]>([]);
  // const [element, setElement] = useState();
  const [result, setResult] = useState({
    wpm: 0,
    accuracy: 0,
    correctChars: 0,
    errors: 0,
    extras: 0,
    missed: 0,
    time: 0,
  });

  const [data, setData] = useState<dataInterface[]>([]);
  useEffect(() => {
    setData([
      {
        id: "Current Test",
        color: "hsl(0, 100%, 50%)",
        data: wpmArr.map((element, index) => ({ x: index, y: element.wpm })),
      },
    ]);
  }, [wpmArr]);

  // useEffect(() => {
  //   setElement({});
  // })

  useEffect(() => {
    setResult({ ...result, wpm: Math.round((result.wpm /= wpmArr.length)) });
  }, [wpmArr, setResult]);

  const handleRefresh = useCallback(() => {
    setWpmArr([]);
    setResult({
      wpm: 0,
      accuracy: 0,
      correctChars: 0,
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
    let resultantCorrectChars = 0;
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
        resultantCorrectChars += correctChars;
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
      correctChars: resultantCorrectChars,
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
      <div className="flex flex-col items-center">
        <div>
          <div className="flex flex-col items-start">
            <span className="text-4xl text-custom-primary">wpm</span>
            <span className="text-7xl text-custom-tertiary">{result.wpm}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-4xl text-custom-primary">accuracy</span>
            <span className="text-7xl text-custom-tertiary">
              {result.accuracy}%
            </span>
          </div>
        </div>
        <LineChart data={data} />
      </div>
      <div className="w-full px-7 flex justify-between">
        <div className="flex flex-col">
          <span className="text-xl text-custom-primary">time</span>
          <span className="text-2xl text-custom-tertiary">{result.time}s</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl text-custom-primary">character</span>
          <span className="text-2xl text-custom-tertiary">
            <Tooltip
              element={
                result.correctChars.toString() +
                "/" +
                result.errors.toString() +
                "/" +
                result.extras.toString() +
                "/" +
                result.missed.toString()
              }
              hover={"correct/errors/extras/missed"}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Result;
