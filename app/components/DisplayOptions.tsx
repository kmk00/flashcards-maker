const DisplayOptions = ({
  options,
  label,
}: {
  options: PDFOptions;
  label: string;
}) => {
  return (
    <div className="mt-4 p-2">
      <p className="pr-2">{label} Card Options:</p>
      <div className="flex gap-2 flex-col">
        <p>
          {options.width} x {options.height}
        </p>
        <p>Question size: {options.questionFontSize}px</p>
        <p>Answer size: {options.answerFontSize}px</p>
        <p>Current mode: {options.mode}</p>
        <div className="flex gap-2">
          <p>Question color</p>
          <span
            style={{ backgroundColor: options.questionColor }}
            className="w-5 h-5"
          ></span>
        </div>
        <div className="flex gap-2">
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
