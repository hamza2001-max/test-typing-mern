import { themeSlice } from "../redux/themeSlice";

// export const themeSchemes = [
//   {
//     title: "light",
//     fill: "#f2f2f2",
//     primary: "#bdbdbd",
//     secondary: "#000",
//     tertiary: "#ff0000",
//     theme: themeSlice.actions.light,
//   },
//   {
//     title: "dark",
//     fill: "#000",
//     primary: "#444444",
//     secondary: "#fff",
//     tertiary: "#ff0000",
//     theme: themeSlice.actions.dark,
//   },
//   {
//     title: "afterDark",
//     fill: "#1b1d36",
//     primary: "#99d6ea",
//     secondary: "#fca6d1",
//     tertiary: "#e1e7ec",
//     theme: themeSlice.actions.afterDark,
//   },
//   {
//     title: "retrocast",
//     fill: "#07737a",
//     primary: "#88dbdf",
//     secondary: "#f3e03b",
//     tertiary: "#ffffff",
//     theme: themeSlice.actions.retrocast,
//   },
//   {
//     title: "laser",
//     fill: "#221b44",
//     primary: "#b82356",
//     secondary: "#000000",
//     tertiary: "#dbe7e8",
//     theme: themeSlice.actions.laser,
//   },
//   {
//     title: "matrix",
//     fill: "#000000",
//     primary: "#003b00",
//     secondary: "#15ff00",
//     tertiary: "#d1ffcd",
//     theme: themeSlice.actions.matrix,
//   },
//   {
//     title: "trance",
//     fill: "#00021b",
//     primary: "#3c4c79",
//     secondary: "#e51376",
//     tertiary: "#02d3b0",
//     theme: themeSlice.actions.trance,
//   },
// ];
export const themeSchemes = [
  {
    title: "light",
    themeClass: "",
    theme: themeSlice.actions.light,
  },
  {
    title: "dark",
    themeClass: "dark",
    theme: themeSlice.actions.dark,
  },
  {
    title: "After Dark",
    themeClass: "afterDark",
    theme: themeSlice.actions.afterDark,
  },
  {
    title: "retrocast",
    themeClass: "retrocast",
    theme: themeSlice.actions.retrocast,
  },
  {
    title: "laser",
    themeClass: "laser",
    theme: themeSlice.actions.laser,
  },
  {
    title: "matrix",
    themeClass: "matrix",
    theme: themeSlice.actions.matrix,
  },
  {
    title: "trance",
    themeClass: "trance",
    theme: themeSlice.actions.trance,
  },
  {
    title: "desert oasis",
    themeClass: "desertOasis",
    theme: themeSlice.actions.desertOasis,
  },
];