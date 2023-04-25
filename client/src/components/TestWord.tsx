// import { useState } from "react";
export const TestWord = (props: { word: string }) => {
  return (
    <div className="">
      {props.word.split("").map((char, index) => {
        return char;
      }).join("")}&nbsp;
      {/* <span className="">{props.word}&nbsp;</span> */}
    </div>
  );
};
