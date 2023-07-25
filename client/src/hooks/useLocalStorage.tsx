import { useEffect, useState } from "react";

const getStoredValue = (key: string, defaultValue: any) => {
  const saved = localStorage.getItem(key);
  const value = JSON.parse(saved!) as string;
  return value || defaultValue;
};

export const useLocalStorage = (key: string, defaultValue:any) => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
