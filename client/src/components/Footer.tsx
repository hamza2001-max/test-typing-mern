import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../redux/themeSlice";
import { themeInterface, themeVInterface } from "../types";
import { themeVSlice } from "../redux/visibilitySlice";
import { ThemeOption } from "./ThemeOption";
import { themeSchemes } from "../jsonData";

export const Footer = () => {
  const theme = useSelector((state: themeInterface) => state.theme.theme);
  const themeVSelector = useSelector(
    (state: themeVInterface) => state.themeV.themeV
  );
  const themeVDispatch = useDispatch();
  const themeDispatch = useDispatch();
  const { visibleTheme, inVisibleTheme } = themeVSlice.actions;

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
        <div className="text-custom-primary flex flex-col relative">
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
          className="h-64 w-64 p-4 rounded-xl flex flex-col space-y-3 text-xs bg-custom-fill 
          text-custom-primary border border-custom-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          {themeSchemes.map((scheme, index) => {
            return (
              <ThemeOption
                key={index}
                title={scheme.title}
                fill={scheme.fill}
                primary={scheme.primary}
                secondary={scheme.secondary}
                tertiary={scheme.tertiary}
                onClick={() => handleThemeChange(scheme.theme)}
              />
            );
          })}
        </div>
      )}
    </footer>
  );
};
