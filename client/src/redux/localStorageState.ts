export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("unable to save State to localStorage.");
    return undefined;
  }
};

export const saveState = <T>(state: T): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    console.error("unable to save State to localStorage.");
    return undefined;
  }
};
