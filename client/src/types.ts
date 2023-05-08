import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export interface themeInterface {
  theme: string;
}

export interface themeInterface {
  testMode: string;
}

export interface themeVisibilityInterface {
  themeVisibility: boolean;
  setThemeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface testSettingsVisibilityInterface {
  testSettingsVisibility: boolean;
  setTestSettingsVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface testModifierInterface {
  title: string;
  testModifier: string;
  setTestModifier: React.Dispatch<React.SetStateAction<string>>;
}

export interface testModeInterface {
  title: string;
  time: ActionCreatorWithoutPayload<"testMode/time">;
  words: ActionCreatorWithoutPayload<"testMode/words">;
  quote: ActionCreatorWithoutPayload<"testMode/quote">;
  zen: ActionCreatorWithoutPayload<"testMode/zen">;
  custom: ActionCreatorWithoutPayload<"testMode/custom">;
  defaultLimit?: string | number;
  setTestLimit: React.Dispatch<React.SetStateAction<string | number>>;
}

export interface testLimiterInterface {
  testMode: string;
  testLimit: string | number;
  setTestLimit: React.Dispatch<React.SetStateAction<string | number>>;
}
