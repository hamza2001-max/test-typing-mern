import { TooltipInterface } from "../../typescript/types";

export const Tooltip = ({ element, hover, icon, nowrap }: TooltipInterface) => {
  const IconComponent = icon as React.ComponentType;
  return (
    <div className="relative flex flex-col items-center group">
      <div className="absolute flex-col items-center hidden mb-6 group-hover:flex ">
        <span
          className={`relative z-10 p-2 leading-none ${
            nowrap && "whitespace-nowrap"
          } text-custom-tertiary bg-custom-secondary shadow-lg rounded-md text-base`}
        >
          {hover}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-custom-secondary"></div>
      </div>
      {element && element}
      <span className="text-custom-primary hover:text-custom-secondary transition ease-in-out delay-75">{icon && <IconComponent />}</span>
    </div>
  );
};
