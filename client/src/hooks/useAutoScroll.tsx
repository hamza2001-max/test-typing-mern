import { useEffect, useRef, useState } from "react";
interface useAutoScrollInterface {
  testSentence: string;
  textWritten: string;
}
export const useAutoScroll = ({
  testSentence,
  textWritten,
}: useAutoScrollInterface) => {
  const [lineHeiInc, setLineHeiInc] = useState(1.25);
  const [scrollIndex, setScrollIndex] = useState(3);
  const divRef = useRef<HTMLDivElement>(null);
  const typedSentenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedSentenceRef.current) {
      typedSentenceRef.current.scrollTop = 0;
    }
  }, [testSentence]);

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      const divHeight = divElement.offsetHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(divElement).lineHeight || "0"
      );
      const lines = Math.floor(divHeight / lineHeight);
      if (lines === scrollIndex) {
        if (typedSentenceRef.current) {
          typedSentenceRef.current.scrollTop = lineHeight * lineHeiInc;
          setScrollIndex((prev) => ++prev);
          setLineHeiInc((prev) => prev + 1.25);
        }
      }
    }
  }, [textWritten, lineHeiInc, scrollIndex, setScrollIndex, setLineHeiInc]);

  return {
    divRef,
    typedSentenceRef,
    setLineHeiInc,
    setScrollIndex
  };
};
