import React from "react";
import { CalculateResultInterface } from "../types";

const Result = ({
  wpm,
  accuracy,
  time,
  correctChars,
  incorrectChars,
  missed,
  extras,
}: CalculateResultInterface) => {
  return (
    <div>
      <span>{wpm }</span>{" "}
      <span>{accuracy }</span>
      <span>{time}</span>
      <span>{correctChars}</span>
      <span>{incorrectChars}</span>
      <span>{missed}</span>
      <span>{extras}</span>
    </div>
  );
};

export default Result;
