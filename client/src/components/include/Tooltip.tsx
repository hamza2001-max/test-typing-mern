import { TooltipInterface } from "../../typescript/types";

export const Tooltip = ({ element, hover, icon, nowrap, space }: TooltipInterface) => {
  const IconComponent = icon as React.ComponentType;
  return (
    <div className="relative flex flex-col items-center cursor-pointer group">
      <div className={`absolute ${space} flex flex-col items-center opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:-translate-y-[0.15rem]`}>
        <span
          className={`relative z-10 p-2 leading-none ${
            nowrap && "whitespace-nowrap"
          } text-custom-fill bg-custom-secondary shadow-lg rounded-md text-base`}
        >
          {hover}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-custom-secondary"></div>
      </div>
      {element && element}
      <span className="hover:text-custom-secondary transition ease-in-out delay-75">{icon && <IconComponent />}</span>
    </div>
  );
};