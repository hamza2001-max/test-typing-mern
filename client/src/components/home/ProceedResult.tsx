import { useRef, useEffect } from "react";
import { Tooltip } from "../include/Tooltip";
import { BsArrowRepeat } from "react-icons/bs";
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
    <div className="gap-x-12 mt-10 mb-5 sm:flex">
      <button
        className="text-2xl px-8 py-4  outline-none rounded-md text-custom-primary hover:text-custom-secondary focus:bg-custom-secondary
        focus:text-custom-fill"
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
      <button className="text-xl px-8 py-4 text-custom-primary hover:text-custom-secondary  focus:bg-custom-secondary
        focus:text-custom-fill" onClick={handleResultReset}>
        <Tooltip
          icon={BsArrowRepeat}
          hover="Repeat Test"
          nowrap={true}
          space="bottom-8"
        />
      </button>
    </div>
  );
};
