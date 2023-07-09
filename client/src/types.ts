export interface ThemeOptionInterface {
  title: string;
  themeClass: string;
  onClick: () => void;
}

export interface CurrentFragmentInterface {
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

export interface RemainingLettersInterface {
  currentSentenceWord: string;
  inputValue: string;
}

export interface CalculateResultInterface {
  wpm: number;
  errors: number;
  time: number;
  accuracy: number;
  extras: number;
  missed: number;
}