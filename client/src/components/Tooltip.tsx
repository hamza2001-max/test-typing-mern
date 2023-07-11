import { TooltipInterface } from "../typescript/types";

export const Tooltip = ({ element, hover }: TooltipInterface) => {
  return (
      <div className="relative flex flex-col items-center group">
        <div className="absolute bottom-2 flex-col items-center hidden mb-6 group-hover:flex">
          <span className="relative z-10 p-2 leading-none text-white  bg-black shadow-lg rounded-md text-base">
            {hover}
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
        {element}
      </div>
  );
};
