import { useCallback, useEffect, useState } from "react";
import {
  CalculateResultInterface,
  dataInterface,
  resultInterface,
  wpmArrInterface,
} from "../typescript/types";
import { LineChart } from "./LineChart";

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
  useEffect(() => {
    setData([
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
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div>
          <div className="flex flex-col">
            <span>wpm</span>
            <span>{result.wpm}</span>
          </div>
          <div>
            <span>accuracy</span>
            <span>{result.accuracy}</span>
          </div>
        </div>
        <LineChart data={data} />
      </div>
      <span>time {result.time}</span>
      <br />
      <span>incorrectChars {result.errors}</span>
      <br />
      <span>missed {result.missed}</span>
      <br />
      <span>extras {result.extras}</span>
      {/* <button></button> */}
    </section>
  );
};

export default Result;
