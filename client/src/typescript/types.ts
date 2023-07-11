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

export interface wpmArrInterface {
  word: string;
  wpm: number;
  errors: number;
  correctChars: number;
  time: number;
}

export interface resultInterface {
  textWritten: string;
  testSentence: string;
  elapsedTimeArray: number[];
  handleRefreshStatus: boolean;
  setHandleRefreshStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

// export interface axisInterface {
//   x: number;
//   y: number;
// }

export interface dataInterface {
  id: string;
  color: string;
  data: {x: number, y: number}[];
}