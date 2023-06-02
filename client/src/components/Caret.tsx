export const Caret = ({ offset }: { offset: number }) => {
  return (
    <span
      className={`w-0.1 h-6 rounded-sm bg-custom-secondary transition animate-pulse duration-75`}
      style={{
        position: "absolute",
        top: 2.5,
        left: offset,
      }}
    ></span>
  );
};
