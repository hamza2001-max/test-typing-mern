import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../redux/themeSlice";
import { themeInterface, themeVInterface } from "../types";
import { themeVSlice } from "../redux/visibilitySlice";
import { ThemeOption } from "./ThemeOption";
import { themeSchemes } from "../data/themeSchemeData";
import { footerFirstColumn, footerSecondColumn } from "../data/footerData";

export const Footer = () => {
  const { visibleTheme, inVisibleTheme } = themeVSlice.actions;
  const themeVDispatch = useDispatch();
  const themeDispatch = useDispatch();
  const theme = useSelector((state: themeInterface) => state.theme.theme);
  const themeVSelector = useSelector(
    (state: themeVInterface) => state.themeV.themeV
  );

  const handleThemeChange = (
    selectedTheme: (typeof themeSlice.actions)[keyof typeof themeSlice.actions]
  ) => {
    themeDispatch(selectedTheme());
    themeVDispatch(inVisibleTheme());
  };

  return (
    <footer className="text-sm text-custom-primary px-6 py-6">
      <p className="w-full flex justify-center mb-5">
        <span className="px-1 mr-2 bg-custom-primary text-custom-fill rounded-sm">
          tab
        </span>{" "}
        +{" "}
        <span className="px-1 mx-2 bg-custom-primary text-custom-fill rounded-sm">
          enter
        </span>{" "}
        = restart test
      </p>
      <section className="flex justify-between">
        <div className="flex justify-between w-48">
          <div className="flex flex-col">
            {footerFirstColumn.map((row, index) => {
              return (
                <span
                  className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
                  key={index}
                >
                  {row.title}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col">
            {footerSecondColumn.map((row, index) => {
              return (
                <span
                  className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
                  key={index}
                >
                  {row.title}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col relative">
          <span
            className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
            onClick={() => themeVDispatch(visibleTheme())}
          >
            {theme ? theme : "light"}
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            version
          </span>
        </div>
      </section>
      {themeVSelector && (
        <div
          className="z-30 h-64 w-64 p-4 rounded-xl flex flex-col space-y-3 text-xs bg-custom-fill 
          text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          {themeSchemes.map((scheme, index) => {
            return (
              <ThemeOption
                key={index}
                title={scheme.title}
                themeClass={scheme.themeClass}
                onClick={() => handleThemeChange(scheme.theme)}
              />
            );
          })}
        </div>
      )}
    </footer>
  );
};
