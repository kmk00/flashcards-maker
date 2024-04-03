const DisplayOptions = ({
  options,
  label,
}: {
  options: PDFOptions;
  label: string;
}) => {
  return (
    <div className="mt-4 border-2 sm:min-w-[200px] border-slate-400 p-2">
      <p className="pr-2">{label} Card Options:</p>
      <div className="flex gap-2 flex-col">
        <p>
          {options.width} x {options.height}
        </p>
        <p
          className={`${
            options.questionFontSize > 40 || options.questionFontSize < 10
              ? "text-red-500"
              : ""
          }`}
        >
          Question size: {options.questionFontSize}px
        </p>
        <p
          className={`${
            options.answerFontSize > 40 || options.answerFontSize < 10
              ? "text-red-500"
              : ""
          }`}
        >
          Answer size: {options.answerFontSize}px
        </p>
        {options.questionFontSize > 40 ||
        options.answerFontSize > 40 ||
        options.questionFontSize < 10 ||
        options.answerFontSize < 10 ? (
          <p className="text-red-500 text-[10px]">Font size range: 10-40px</p>
        ) : null}
        <p>Current mode: {options.mode}</p>
        <div className="flex items-center gap-2">
          <p>Question color</p>
          <span
            style={{ backgroundColor: options.questionColor }}
            className="w-5 h-5"
          ></span>
        </div>
        <div className="flex items-center gap-2">
          <p>Answer color</p>
          <span
            style={{ backgroundColor: options.answerColor }}
            className="w-5 h-5"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default DisplayOptions;
