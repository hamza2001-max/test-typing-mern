import { useCallback, useEffect, useState } from "react";
import { LineChart } from "../include/LineChart";
import { Tooltip } from "../include/Tooltip";
import { ProceedResult } from "./ProceedResult";
import { useRedux } from "../../hooks/useRedux";
import { useMutation } from "react-query";
import { queryClient } from "../..";
import axios from "axios";
import {
  IData,
  IResult,
  IWpmArr,
} from "../../types";

interface mutationInterface {
  wpm: number;
  accuracy: number,
  correctChars: number,
  error: number,
  extras: number,
  missed: number,
  mode: string,
  limiter: number | string,
  time: number,
}

const Result = ({
  textWritten,
  testSentence,
  elapsedTimeArray,
  resetState,
  handleRefresh,
  source,
}: IResult) => {
  const { testFrameSelector, testLimiterSelector } = useRedux();
  const [wpmArr, setWpmArr] = useState<IWpmArr[]>([]);
  const [data, setData] = useState<IData[]>([]);
  const { authSelector } = useRedux();
  const [result, setResult] = useState({
    wpm: 0,
    accuracy: 0,
    correctChars: 0,
    errors: 0,
    extras: 0,
    missed: 0,
    time: 0,
  });

  useEffect(() => {
    let data = wpmArr.map((element, index) => ({
      x: index,
      y: element.wpm,
    }));

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

  const mutationFunction = async (record: mutationInterface) => {
    const postRecord = await axios.post("http://localhost:7000/api/wpm/", record, {
      headers: {
        Authorization: `Bearer ${authSelector?.token}`,
      }
    }).catch((err) => {
      console.log(err);
    })
    return postRecord;
  }

  const handleResultRefresh = useCallback(() => {
    handleResultReset();
    handleRefresh();
  }, [handleRefresh, handleResultReset]);

  const { mutate } = useMutation({
    mutationFn: mutationFunction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wpmRecord"] });
    },
    onError: () => {
      console.error("error received from useMutation");
    }
  })

  const calculateResult = useCallback(() => {
    let resultantWpm = 0;
    let resultantErrors = 0;
    let resultantTime = 0;
    let resultantCorrectChars = 0;
    let correctWords = 0;
    let extras = 0;
    let missed = 0;
    let wpmArrLength = 0;
    let val: IWpmArr[] = [];

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
          (word.length - errors) / 5 / (elapsedTimeArray[index] / 60)
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

    if (authSelector) {
      mutate(
        {
          wpm: Number((resultantWpm / wpmArrLength).toFixed(3)),
          accuracy: Number(accuracy.toFixed(2)),
          time: Number(resultantTime.toFixed(2)),
          correctChars: resultantCorrectChars,
          error: resultantErrors,
          extras,
          missed,
          limiter: testLimiterSelector,
          mode: testFrameSelector
        }
      );
    }
  }, [elapsedTimeArray, testSentence, textWritten, mutate, testLimiterSelector, testFrameSelector, authSelector]);

  useEffect(() => {
    if (
      textWritten.split(" ").length - 1 === testSentence.split(" ").length
    ) {
      calculateResult();
    }
  }, [textWritten, testSentence, calculateResult]);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center sm:flex-row">
        <div className="xs:flex xs:w-64 sm:w-auto sm:mr-9 xs:justify-between sm:block">
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
            <span className="text-3xl text-custom-primary">acc</span>
            <span className="text-6xl text-custom-tertiary">
              <Tooltip
                element={result.accuracy.toFixed(0) + "%"}
                hover={result.accuracy + "% accuracy"}
                nowrap={true}
                space="bottom-12"
              />
            </span>
          </div>
        </div>
        <LineChart data={data} xLegend="Indeces Of Words" />
      </div>
      <div className="w-full px-9 flex justify-between sm:justify-start sm:space-x-12 md:justify-center md:mt-5">
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
        {testFrameSelector === "quote" && (
          <div className="flex flex-col">
            <span className="text-xl text-custom-primary">source</span>
            <span className="text-2xl text-custom-tertiary">{source}</span>
          </div>
        )}
      </div>
      <ProceedResult
        handleResultRefresh={handleResultRefresh}
        handleResultReset={handleResultReset}
      />
    </section>
  );
};

export default Result;
