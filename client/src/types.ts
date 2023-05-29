export interface ThemeOptionInterface {
  title: string;
  themeClass: string;
  onClick: () => void;
}

export interface themeInterface {
  theme: { theme: string };
}

export interface testModeSInterface {
  testMode: { testMode: string };
}

export interface customPromptVSInterface {
  customPromptV: { customPromptV: boolean };
}

export interface promptValueInterface {
  promptValue: { promptValue: number };
}

export interface themeVInterface {
  themeV: { themeV: boolean };
}

export interface testSettingsVInterface {
  testSettingsV: { testSettingsV: boolean };
}

export interface CurrentFragmentInterface {
  word: string;
  inputValue: string;
  currentSentenceWord: string;
}

export interface WordCheckerInterface {
  inputValue: string;
  testSentence: string;
  textWritten: string;
  scrollIndex: number;
  lineHeiInc: number;
  setScrollIndex: React.Dispatch<React.SetStateAction<number>>;
  setLineHeiInc: React.Dispatch<React.SetStateAction<number>>;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface PreviousFragmentInterface {
  word: string;
  inputValue: string;
  writtenWord: string;
}
