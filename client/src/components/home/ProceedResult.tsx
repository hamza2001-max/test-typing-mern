import { useRef, useEffect } from "react";
import { Tooltip } from "../include/Tooltip";
import { BsArrowRepeat, BsTextLeft } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import { IProceedResult } from "../../types";
import { MdNavigateNext } from "react-icons/md";

export const ProceedResult = ({
  handleResultRefresh,
  handleResultReset,
}: IProceedResult) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const handleBtnKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleBtnKeyDown);
    return () => document.removeEventListener("keydown", handleBtnKeyDown);
  });

  return (
    <div className="grid grid-cols-2 gap-y-12 gap-x-12 mt-10 mb-5 sm:flex">
      <button
        className="text-2xl px-8 py-4  outline-none rounded-md text-custom-primary hover:text-custom-secondary"
        onClick={handleResultRefresh}
        ref={btnRef}
      >
        <Tooltip
          icon={MdNavigateNext}
          hover="Next Test"
          nowrap={true}
          space="bottom-8"
        />
      </button>
      <button className="text-xl px-8 py-4 text-custom-primary hover:text-custom-secondary" onClick={handleResultReset}>
        <Tooltip
          icon={BsArrowRepeat}
          hover="Repeat Test"
          nowrap={true}
          space="bottom-8"
        />
      </button>
      <button className="text-xl px-8 py-4 text-custom-primary hover:text-custom-secondary">
        <Tooltip
          icon={AiFillWarning}
          hover="Practice Words"
          nowrap={true}
          space="bottom-8"
        />
      </button>
      <button className="text-xl px-8 py-4 text-custom-primary hover:text-custom-secondary">
        <Tooltip
          icon={BsTextLeft}
          hover="Toggle Word History"
          nowrap={true}
          space="bottom-8"
        />
      </button>
    </div>
  );
};
