import { useFlashcardsStore } from "@/store/flashcards";
import { usePDFOptions } from "@/store/options";
import { useState } from "react";

type Props = {
  id: string;
  questionNumber: number;
};

const FlashcardInput = ({ id, questionNumber }: Props) => {
  const [question, setQuestion] = useState<string>("Type your question");
  const [answer, setAnswer] = useState<string>("Type your answer");
  const [isTooLong, setIsTooLong] = useState<boolean>(false);

  const { updateFlashcard, deleteFlashcard } = useFlashcardsStore();
  const { currentOptions } = usePDFOptions();

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkInputLength(currentOptions, question);
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkInputLength(currentOptions, answer);
    setAnswer(event.target.value);
  };

  const checkInputLength = (option: PDFOptions, inputToCheck: string) => {
    // Big width and height for single mode
    if (
      inputToCheck.length > 220 &&
      option.mode === "single" &&
      option.width > 195 &&
      option.height > 195
    ) {
      setIsTooLong(true);
      return;
    }
    // Small width or height for single mode
    if (inputToCheck.length > 130 && option.mode === "single") {
      console.log(option);
      setIsTooLong(true);
      return;
    }

    // Big width and height for fold mode
    if (
      inputToCheck.length > 550 &&
      option.mode === "fold" &&
      option.width > 195 &&
      option.height > 195
    ) {
      setIsTooLong(true);
      return;
    }
    // Small width or height for fold mode
    if (inputToCheck.length > 300 && option.mode === "fold") {
      console.log(option);
      setIsTooLong(true);
      return;
    }

    // Remove warning
    setIsTooLong(false);
  };

  return (
    <div
      className={`${
        isTooLong ? "border-orange-300" : ""
      } border-slate-400 relative border-2 flex flex-col gap-2 mt-3 p-2`}
    >
      <p>Question {questionNumber}</p>
      <input
        onChange={handleQuestionChange}
        value={question}
        className="p-1 text-slate-100 bg-slate-700 placeholder:text-slate-800"
        type="text"
        placeholder="Type your question here"
      />
      <input
        onChange={handleAnswerChange}
        value={answer}
        className="p-1 text-slate-100 bg-slate-700 placeholder:text-slate-800"
        type="text"
        placeholder="Type your answer here"
      />
      {isTooLong ? (
        <p className="text-orange-300">Your input may be too long</p>
      ) : null}
      <div className="flex gap-4 py-2">
        <button
          className="text-left hover:border-l-2 hover:border-r-2 p-2 rounded-md border-slate-700/85  "
          onClick={() => {
            updateFlashcard(id, {
              id: id,
              questionNumber: questionNumber,
              question,
              answer,
            });
          }}
        >
          Set flashcard
        </button>
        <button
          className="text-left hover:border-l-2 hover:border-r-2 p-2 rounded-md border-slate-700/85"
          onClick={() => {
            deleteFlashcard(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FlashcardInput;
