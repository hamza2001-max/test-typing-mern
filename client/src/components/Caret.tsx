export const Caret = () => {
  return (
    <span
      className={`absolute top-1 left-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition animate-pulse duration-75`}
    ></span>
  );
};

export const CaretEnd = () => {
  return (
    <span
      className={`absolute top-1 right-0 w-0.1 h-6 rounded-sm bg-custom-secondary transition animate-pulse duration-75`}
    ></span>
  );
};
