import { useCallback, useEffect, useState } from "react";
import {
  DataInterface,
  ResultInterface,
  WpmArrInterface,
} from "../../typescript/types";
import { LineChart } from "./LineChart";
import { Tooltip } from "../include/Tooltip";
import { ProceedResult } from "./ProceedResult";

const Result = ({
  textWritten,
  testSentence,
  elapsedTimeArray,
  resetState,
  handleRefresh,
}: ResultInterface) => {
  const [wpmArr, setWpmArr] = useState<WpmArrInterface[]>([]);
  const [result, setResult] = useState({
    wpm: 0,
    accuracy: 0,
    correctChars: 0,
    errors: 0,
    extras: 0,
    missed: 0,
    time: 0,
  });
  const [exe, setExe] = useState(0);
  const [data, setData] = useState<DataInterface[]>([]);

  useEffect(() => {
    let data;
    if (wpmArr.length > 10) {
      const num = Math.ceil(wpmArr.length / 10);
      data = [];
      for (let i = 0; i < wpmArr.length; i += num) {
        let sum = 0;
        let count = 0; 
        for (let j = i; j < i + num && j < wpmArr.length; j++) {
          sum += wpmArr[j].wpm;
          count++;
        }   
        data.push({
          x: i / num,
          y: sum / count,
        });
      }
    } else {
      data = wpmArr.map((element, index) => ({
        x: index,
        y: element.wpm,
      }));
    }
  
    setData([
      {
        id: "Current Test",
        data: data,
      },
    ]);
  }, [wpmArr]);

  const handleResultReset = useCallback(() => {
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
    setData([]);
    resetState();
  }, [resetState]);

  const handleResultRefresh = useCallback(() => {
    handleResultReset();
    handleRefresh();
  }, [handleRefresh, handleResultReset]);

  const calculateResult = useCallback(() => {
    let resultantWpm = 0;
    let resultantErrors = 0;
    let resultantTime = 0;
    let resultantCorrectChars = 0;
    let correctWords = 0;
    let extras = 0;
    let missed = 0;
    let wpmArrLength = 0;
    let val: WpmArrInterface[] = [];

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
          (word.length + 1 - errors) / 5 / (elapsedTimeArray[index] / 60)
        );
        resultantWpm += wpm;
        resultantCorrectChars += correctChars;
        resultantErrors += errors;
        resultantTime += elapsedTimeArray[index];
        wpmArrLength++;
        if (val.length < textWrittenArray.length) {
          val.push({
            word,
            wpm,
            errors,
            correctChars,
            time: elapsedTimeArray[index],
          });
        }
        setWpmArr(val);
        return acc;
      },
      { correctWords, extras, missed }
    );

    let accuracy = (resultant.correctWords / testSentenceArray.length) * 100;
    extras = resultant.extras;
    missed = resultant.missed;

    setResult({
      wpm: Number((resultantWpm / wpmArrLength).toFixed(3)),
      errors: resultantErrors,
      time: Number(resultantTime.toFixed(2)),
      correctChars: resultantCorrectChars,
      accuracy: Number(accuracy.toFixed(2)),
      extras,
      missed,
    });
  }, [elapsedTimeArray, testSentence, textWritten]);

  useEffect(() => {
    if (
      textWritten.split(" ").length - 1 === testSentence.split(" ").length &&
      exe === 0
    ) {
      calculateResult();
      setExe((prev) => ++prev);
    }
  }, [textWritten, testSentence, calculateResult, exe]);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <div className="flex flex-col items-start mb-4">
            <span className="text-3xl text-custom-primary">wpm</span>
            <span className="text-6xl text-custom-tertiary">
              <Tooltip
                element={result.wpm.toFixed(0)}
                hover={result.wpm.toString() + " wpm"}
                nowrap={true}
                space="bottom-12"
              />
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-3xl text-custom-primary">accuracy</span>
            <span className="text-6xl text-custom-tertiary">
              <Tooltip
                element={result.accuracy.toFixed(0) + "%"}
                hover={result.accuracy + "%"}
                nowrap={false}
                space="bottom-12"
              />
            </span>
          </div>
        </div>
        <LineChart data={data} />
      </div>
      <div className="w-full px-7 flex justify-between">
        <div className="flex flex-col">
          <span className="text-xl text-custom-primary">time</span>
          <span className="text-2xl text-custom-tertiary">
            <Tooltip
              element={result.time.toFixed(0) + "s"}
              hover={result.time + "s"}
              nowrap={false}
              space="bottom-8"
            />
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl text-custom-primary">character</span>
          <span className="text-2xl text-custom-tertiary">
            <Tooltip
              element={
                result.correctChars +
                "/" +
                result.errors +
                "/" +
                result.extras +
                "/" +
                result.missed
              }
              hover={"correct/errors/extras/missed"}
              nowrap={false}
              space="bottom-8"
            />
          </span>
        </div> 
      </div>
      <ProceedResult
        handleResultRefresh={handleResultRefresh}
        handleResultReset={handleResultReset}
      />
    </section>
  );
};

export default Result;
