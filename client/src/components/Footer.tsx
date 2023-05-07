import { useDispatch } from "react-redux";
import { themeSlice } from "../redux/themeSlice";
import { themeVisibilityInterface } from "../types";

export const Footer = ({
  themeVisibility,
  setThemeVisibility,
}: themeVisibilityInterface) => {
  const dispatch = useDispatch();
  const { light, dark, afterDark, retrocast } = themeSlice.actions;

  return (
    <section className="flex justify-between  px-6 py-6">
      <div className="flex justify-between w-48">
        <div className="text-custom-primary flex flex-col">
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Contact
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Github
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Twitter
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Security
          </span>
        </div>
        <div className="text-custom-primary flex flex-col">
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Support
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Discord
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Terms
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Privacy
          </span>
        </div>
      </div>
      {themeVisibility && (
        <div
          className="h-64 w-64 p-4 rounded-xl flex flex-col space-y-3 text-xs bg-custom-fill 
        text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dispatch(light())}
          >
            <span>light</span>
            <div className="flex justify-center items-center space-x-1 bg-[#f2f2f2] h-5 w-14 rounded-2xl">
              <div className="bg-[#000] h-3 w-3 rounded-full"></div>
              <div className="bg-[#b7b7b7] h-3 w-3 rounded-full"></div>
              <div className="bg-[#ff0000] h-3 w-3 rounded-full"></div>
            </div>
          </div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dispatch(dark())}
          >
            <span>dark</span>
            <div className="flex justify-center items-center space-x-1 bg-[#000] h-5 w-14 rounded-2xl">
              <div className="bg-[#444444] h-3 w-3 rounded-full"></div>
              <div className="bg-[#fff] h-3 w-3 rounded-full"></div>
              <div className="bg-[#ff0000] h-3 w-3 rounded-full"></div>
            </div>
          </div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dispatch(afterDark())}
          >
            <span>80's after dark</span>
            <div className="flex justify-center items-center space-x-1 bg-[#1b1d36] h-5 w-14 rounded-2xl">
              <div className="bg-[#99d6ea] h-3 w-3 rounded-full"></div>
              <div className="bg-[#fca6d1] h-3 w-3 rounded-full"></div>
              <div className="bg-[#e1e7ec] h-3 w-3 rounded-full"></div>
            </div>
          </div>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dispatch(retrocast())}
          >
            <span>retrocast</span>
            <div className="flex justify-center items-center space-x-1 bg-[#07737a] h-5 w-14 rounded-2xl">
              <div className="bg-[#88dbdf] h-3 w-3 rounded-full"></div>
              <div className="bg-[#f3e03b] h-3 w-3 rounded-full"></div>
              <div className="bg-[#ffffff] h-3 w-3 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      <div className="text-custom-primary flex flex-col relative">
        <span
          className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
          onClick={() => setThemeVisibility(true)}
        >
          theme
        </span>
        <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
          version
        </span>
      </div>
    </section>
  );
};
