import { useRef, useEffect } from "react";
import { Tooltip } from "../include/Tooltip";
import { BsArrowRepeat, BsTextLeft } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import { ProceedResultInterface } from "../../typescript/types";
import { MdNavigateNext } from "react-icons/md";

export const ProceedResult = ({
  handleResultRefresh,
  handleResultReset,
}: ProceedResultInterface) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const handleBtnKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleBtnKeyDown);

    return document.removeEventListener("keydown", handleBtnKeyDown);
  });

  return (
    <div className="grid grid-cols-2 gap-y-12 gap-x-12 mt-10 mb-5">
      <button
        className="text-2xl px-8 py-4"
        onClick={handleResultRefresh}
        ref={btnRef}
      >
        <Tooltip icon={MdNavigateNext} hover="Next Test" nowrap={true} />
      </button>
      <button className="text-xl px-8 py-4" onClick={handleResultReset}>
        <Tooltip icon={BsArrowRepeat} hover="Repeat Test" nowrap={true} />
      </button>
      <button className="text-xl px-8 py-4">
        <Tooltip icon={AiFillWarning} hover="Practice Words" nowrap={true} />
      </button>
      <button className="text-xl px-8 py-4">
        <Tooltip icon={BsTextLeft} hover="Toggle Word History" nowrap={true} />
      </button>
    </div>
  );
};
