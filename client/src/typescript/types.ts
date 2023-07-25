import { IconType } from "react-icons/lib";

export interface ThemeOptionInterface {
  title: string;
  themeClass: string;
  onClick: () => void;
}

export interface CurrentFragmentInterface {
  inputValue: string;
  currentSentenceWord: string;
}

export interface WordValidatorInterface {
  inputValue: string;
  testSentence: string;
  textWritten: string;
}

export interface PreviousFragmentInterface {
  word: string;
  inputValue: string;
  writtenWord: string;
}

export interface CurrentRemainingLettersInterface {
  currentSentenceWord: string;
  inputValue: string;
}

export interface PreviousRemainingLettersInterface {
  writtenWord: string;
  word: string;
}

export interface CalculateResultInterface {
  wpm: number;
  errors: number;
  correctChars: number;
  time: number;
  accuracy: number;
  extras: number;
  missed: number;
}

export interface WpmArrInterface {
  word: string;
  wpm: number;
  errors: number;
  correctChars: number;
  time: number;
}

export interface ResultInterface {
  source: string;
  textWritten: string;
  testSentence: string;
  elapsedTimeArray: number[];
  handleRefresh: () => void;
  resetState: () => void;
}

export interface AxisInterface {
  x: number;
  y: number;
}

export interface DataInterface {
  id: string;
  data: AxisInterface[];
}

export interface TooltipInterface {
  element?: string;
  hover: string;
  icon?: IconType;
  nowrap: boolean;
  space: string;
}

export interface ProceedResultInterface {
  handleResultRefresh: () => void;
  handleResultReset: () => void;
}

export interface QuoteJSONInterface {
  [key: string]: { quote: string; source: string }[];
}

export interface TypingInfoInterface {
  countDown: number;
  inputValue: string;
  textWritten: string;
  testSentence: string;
}

export interface useTimerInterface {
  countDownStatus: string;
  countDown: number;
  startCountDown: () => void;
  resetCountDown: () => void;
}

export interface useAutoScrollInterface {
  testSentence: string;
  textWritten: string;
}