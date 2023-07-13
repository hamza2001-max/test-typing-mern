import { ThemeOptionInterface } from "../../typescript/types";

export const ThemeOption = ({
  title,
  themeClass,
  onClick,
}: ThemeOptionInterface) => {
  return (
    <div className="flex justify-between cursor-pointer" onClick={onClick}>
      <span>{title}</span>
      <div
        className={`${themeClass} flex justify-center items-center space-x-1 bg-custom-fill h-5 w-14 rounded-2xl`}
      >
        <div className={`bg-custom-primary h-3 w-3 rounded-full`}></div>
        <div className={`bg-custom-secondary h-3 w-3 rounded-full`}></div>
        <div className={`bg-custom-tertiary h-3 w-3 rounded-full`}></div>
      </div>
    </div>
  );
};
