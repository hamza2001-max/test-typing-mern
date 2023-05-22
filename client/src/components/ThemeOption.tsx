import { ThemeOptionInterface } from "../types";

export const ThemeOption = ({
  title,
  fill,
  primary,
  secondary,
  tertiary,
  onClick,
}: ThemeOptionInterface) => {
  return (
    <div className="flex justify-between cursor-pointer" onClick={onClick}>
      <span>{title}</span>
      <div
        className={`flex justify-center items-center space-x-1 bg-[${fill}] h-5 w-14 rounded-2xl`}
      >
        <div className={`bg-[${primary}] h-3 w-3 rounded-full`}></div>
        <div className={`bg-[${secondary}] h-3 w-3 rounded-full`}></div>
        <div className={`bg-[${tertiary}] h-3 w-3 rounded-full`}></div>
      </div>
    </div>
  );
};
