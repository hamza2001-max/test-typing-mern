export const Caret = ({direction}: {direction: 'left' | 'right'}) => {
  return (
    <span
      className={`absolute top-1 ${direction === 'left' ? 'left-0' : 'right-0'} w-0.1 h-6 rounded-sm bg-custom-secondary transition animate-pulse duration-75`}
    ></span>
  );
};