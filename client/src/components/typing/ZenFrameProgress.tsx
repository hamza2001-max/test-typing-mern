export const ZenFrameProgress = ({ txtArValue }: { txtArValue: string }) => {
  return (
    <>
      {txtArValue && (
        <span className="text-custom-tertiary text-2xl lg:text-custom-xl">
          {txtArValue.split(" ").length - 1}
        </span>
      )}
    </>
  );
};
