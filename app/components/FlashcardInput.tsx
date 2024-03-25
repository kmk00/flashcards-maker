import { useFlashcardsStore } from "@/store/flashcards";
import { useState } from "react";

type Props = {
  id: string;
  questionNumber: number;
};

const FlashcardInput = ({ id, questionNumber }: Props) => {
  const [question, setQuestion] = useState<string>("Type your question here");
  const [answer, setAnswer] = useState<string>("Type your answer here");

  const { updateFlashcard, deleteFlashcard } = useFlashcardsStore();

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <div className=" border-slate-400 border-2 flex flex-col gap-2 mt-3 p-2">
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
