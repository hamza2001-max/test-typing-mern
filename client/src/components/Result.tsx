import { useCallback, useEffect, useState } from "react";
import {
  // CalculateResultInterface,
  dataInterface,
  ResultInterface,
  WpmArrInterface,
} from "../typescript/types";
import { LineChart } from "./LineChart";
import { Tooltip } from "./Tooltip";
import { GrFormNext } from "react-icons/gr";

const Result = ({
  textWritten,
  testSentence,
  elapsedTimeArray,
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

  const handleResultRefresh = useCallback(() => {
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
    handleRefresh();
  }, [handleRefresh]);

  const calculateResult = useCallback(() => {
    let resultantWpm = 0;
    let resultantErrors = 0;
    let resultantTime = 0;
    let resultantCorrectChars = 0;
    let correctWords = 0;
    let extras = 0;
    let missed = 0;
    let wpmArrLength = 0;

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
        wpmArrLength++;
        if(wpmArrLength < textWrittenArray.length-1)
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

    // console.log(wpmArrLength);
    
    setResult({
      wpm: resultantWpm / wpmArrLength,
      errors: resultantErrors,
      time: Number(resultantTime.toFixed(2)),
      correctChars: resultantCorrectChars,
      accuracy,
      extras,
      missed,
    });
  }, [elapsedTimeArray, testSentence, textWritten]);

  useEffect(() => {
    if (textWritten.split(" ").length - 1 === testSentence.split(" ").length && exe === 0) {
      calculateResult();
      setExe(prev => ++prev);
      console.log(exe);
      
    }
  }, [textWritten, testSentence, calculateResult]);

  useEffect(() => {
    console.log(wpmArr);
console.log(textWritten);

  }, [wpmArr])
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
          <span className="text-2xl text-custom-tertiary">
            <Tooltip
              element={result.time.toFixed(0) + "s"}
              hover={result.time + "s"}
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
            />
          </span>
        </div>
      </div>
      <div>
        <button onClick={handleResultRefresh}>
          <GrFormNext />
        </button>
      </div>
    </section>
  );
};

export default Result;
