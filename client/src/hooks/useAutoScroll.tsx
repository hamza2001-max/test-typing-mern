import { useEffect, useRef, useState } from "react";
import { IUseAutoScroll } from "../types";

export const useAutoScroll = ({
  testSentence,
  textWritten,
}: IUseAutoScroll) => {
  const [lineHeiInc, setLineHeiInc] = useState(1.25);
  const [scrollIndex, setScrollIndex] = useState(2);
  const divRef = useRef<HTMLDivElement>(null);
  const typedSentenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedSentenceRef.current) {
      typedSentenceRef.current.scrollTop = 0;
      setLineHeiInc(1.25);
      setScrollIndex(2);
    }
  }, [testSentence]);

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      const divHeight = divElement.offsetHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(divElement).lineHeight || "0"
      );
      let lines = Math.floor(divHeight / lineHeight) - 1 ;
      if (lines === scrollIndex) {
        if (typedSentenceRef.current) {
          typedSentenceRef.current.scrollTop = lineHeight * lineHeiInc;
          setScrollIndex((prev) => (prev += 1));
          setLineHeiInc((prev) => prev + 1.25);
        }
      }
    }
  }, [textWritten, lineHeiInc, scrollIndex, setScrollIndex, setLineHeiInc]);

  return {
    divRef,
    typedSentenceRef,
    setLineHeiInc,
    setScrollIndex,
  };
};
