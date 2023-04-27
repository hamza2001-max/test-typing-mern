import { useEffect, useRef } from "react";
interface testLetterProps {
  testSentence: string;
  inputValue: string;
}

export const TestSentence = (props: testLetterProps) => {
  const value = useRef(0);

  useEffect(() => {
    if (props.inputValue.charAt(props.inputValue.length - 1) === " ") {
      value.current++;
    }
  }, [props.inputValue]);
  console.log(value.current);

  return (
    <section className="flex">
      {props.testSentence.split("").map((letter, index) => {
        if (letter === " ") {
          //returns a space if the letter is a space
          return <span>&nbsp;</span>;
        }

        if (index <= props.inputValue.length - 1) {
          //if the letter is in the inputValue highlight it green or red

          if (
            //if the letter in the sentence is equal to the current letter in the inputValue then proceed.
            props.testSentence.split("")[index] ===
            props.inputValue.split("")[props.inputValue.length - 1]
          ) {
            if (index === props.inputValue.length - 1) {
              //if index is equal to the length of the inputValue then highlight it green
              return <span className="text-green-500">{letter}</span>;
            } else {
              //this is for the inputValue that has already been written
              if (
                props.testSentence.split("")[index] ===
                props.inputValue.split("")[index]
              ) {
                //if the letter in the sentence is equal to the letter in inputValue at the current index than highlight it green
                return <span className="text-green-500">{letter}</span>;
              } else {
                //else highlight it red.
                return <span className="text-red-500">{letter}</span>;
              }
            }
          } else {
            if (
              props.testSentence.split("")[index] ===
              props.inputValue.split("")[index]
            ) {
              return <span className="text-green-500">{letter}</span>;
            }
            if (
              props.testSentence.split("")[index] !==
              props.inputValue.split("")[index]
            ) {
              return <span className="text-red-500">{letter}</span>;
            }
          }
        }

        return <span>{letter}</span>;
      })}
    </section>
  );
};
