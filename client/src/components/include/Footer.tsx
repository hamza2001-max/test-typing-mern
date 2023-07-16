import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../../redux/themeSlice";
import { themeVisibilitySlice } from "../../redux/themeVisibilitySlice";
import { ThemeOption } from "./ThemeOption";
import { themeSchemes } from "../../data/themeSchemeData";
import { footerData } from "../../data/footerData";
import { RootState } from "../../redux/store";
import { IoIosColorPalette } from "react-icons/io";
import { VscRepoForked } from "react-icons/vsc";

export const Footer = () => {
  const { visibleTheme, inVisibleTheme } = themeVisibilitySlice.actions;
  const themeVDispatch = useDispatch();
  const themeDispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeVSelector = useSelector(
    (state: RootState) => state.isThemeVisible.isThemeVisible
  );

  const handleThemeChange = (
    selectedTheme: (typeof themeSlice.actions)[keyof typeof themeSlice.actions]
  ) => {
    themeDispatch(selectedTheme());
    themeVDispatch(inVisibleTheme());
  };

  return (
    <footer className="text-sm text-custom-primary px-12 xl:px-52 py-10">
      <p className="w-full flex justify-center mb-8">
        <span className="px-1 mr-2 bg-custom-primary text-custom-fill rounded-sm">
          tab
        </span>{" "}
        +{" "}
        <span className="px-1 mx-2 bg-custom-primary text-custom-fill rounded-sm">
          enter
        </span>{" "}
        = restart test
      </p>
      <section className="flex justify-between ">
        <div className="grid gap-x-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 xl:grid-cols-8">
          {footerData.map((row, index) => {
            return (
              <span
                className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
                key={index}
              >
                <row.icon className="mr-2" />
                {row.title}
              </span>
            );
          })}
        </div>
        <div className="xl:flex relative">
          <span
            className="flex mr-3 items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75"
            onClick={() => themeVDispatch(visibleTheme())}
          >
            <IoIosColorPalette className="mr-2" />
            {theme ? theme : "light"}
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            <VscRepoForked className="mr-2" />
            version
          </span>
        </div>
      </section>
      {themeVSelector && (
        <div
          className="fixed z-30 w-98 p-4 rounded-xl flex flex-col space-y-3 text-xs bg-custom-fill 
          text-custom-primary border border-custom-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
