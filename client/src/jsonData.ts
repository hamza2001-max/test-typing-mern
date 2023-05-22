import {
  testLimiterSlice,
  testModeSlice,
  testModifierSlice,
} from "./redux/testSettingsSlice";
import { themeSlice } from "./redux/themeSlice";

const { time, words, quote, zen, custom } = testModeSlice.actions;
const { punctuation, numbers } = testModifierSlice.actions;
const { testLimiterReducer } = testLimiterSlice.actions;


export const testSettingModifierData = [
  {
    label: "punctuation",
    action: punctuation,
  },
  {
    label: "numbers",
    action: numbers,
  },
];

export const testSettingModeData = [
  { label: "time", defaultLimit: testLimiterReducer(30), action: time },
  { label: "words", defaultLimit: testLimiterReducer(25), action: words },
  { label: "quote", defaultLimit: testLimiterReducer("medium"), action: quote },
  { label: "zen", action: zen },
  { label: "custom", action: custom },
];

export const testSettingLimiterData = {
  time: [
    {
      limit: 15,
      action: testLimiterReducer(15),
    },
    {
      limit: 30,
      action: testLimiterReducer(30),
    },
    {
      limit: 60,
      action: testLimiterReducer(60),
    },
    {
      limit: 120,
      action: testLimiterReducer(120),
    },
    {
      limit: "custom",
      action: testLimiterReducer("custom"),
    },
  ],
  words: [
    {
      limit: 10,
      action: testLimiterReducer(10),
    },
    {
      limit: 25,
      action: testLimiterReducer(25),
    },
    {
      limit: 50,
      action: testLimiterReducer(50),
    },
    {
      limit: 100,
      action: testLimiterReducer(100),
    },
    {
      limit: "custom",
      action: testLimiterReducer("custom"),
    },
  ],
  quote: [
    {
      limit: "all",
      action: testLimiterReducer("all"),
    },
    {
      limit: "short",
      action: testLimiterReducer("short"),
    },
    {
      limit: "medium",
      action: testLimiterReducer("medium"),
    },
    {
      limit: "long",
      action: testLimiterReducer("long"),
    },
    {
      limit: "search",
      action: testLimiterReducer("search"),
    },
  ],
  custom: [
    {
      limit: "change",
      action: testLimiterReducer("change"),
    },
  ],
};

export const themeSchemes = [
  {
    title: "light",
    fill: "#f2f2f2",
    primary: "#bdbdbd",
    secondary: "#000",
    tertiary: "#ff0000",
    theme: themeSlice.actions.light,
  },
  {
    title: "dark",
    fill: "#000",
    primary: "#444444",
    secondary: "#fff",
    tertiary: "#ff0000",
    theme: themeSlice.actions.dark,
  },
  {
    title: "afterDark",
    fill: "#1b1d36",
    primary: "#99d6ea",
    secondary: "#fca6d1",
    tertiary: "#e1e7ec",
    theme: themeSlice.actions.afterDark,
  },
  {
    title: "retrocast",
    fill: "#07737a",
    primary: "#88dbdf",
    secondary: "#f3e03b",
    tertiary: "#ffffff",
    theme: themeSlice.actions.retrocast,
  },
  {
    title: "laser",
    fill: "#221b44",
    primary: "#b82356",
    secondary: "#000000",
    tertiary: "#dbe7e8",
    theme: themeSlice.actions.laser,
  },
  {
    title: "matrix",
    fill: "#000000",
    primary: "#003b00",
    secondary: "#15ff00",
    tertiary: "#d1ffcd",
    theme: themeSlice.actions.matrix,
  },
  {
    title: "trance",
    fill: "#00021b",
    primary: "#3c4c79",
    secondary: "#e51376",
    tertiary: "#02d3b0",
    theme: themeSlice.actions.trance,
  },
];