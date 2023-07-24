export const Caret = ({ offset }: { offset?: number | null }) => {
  return (
    <>
      {offset ? (
        <span
          className={`w-0.1 h-6 lg:h-7 rounded-sm bg-custom-secondary transition animate-pulse duration-75}`}
          style={{
            position: "absolute",
            left: offset,
            top: 2.5,
          }}
        ></span>
      ) : (
        <span
          className={`w-0.1 h-6 lg:h-7 rounded-sm bg-custom-secondary transition animate-pulse duration-75}`}
          style={{
            position: "absolute",
            top: 2.5,
          }}
        ></span>
      )}
    </>
  );
};
