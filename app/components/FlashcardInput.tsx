import { useFlashcardsStore } from "@/store/flashcards";
import { useState } from "react";

type Props = {
  index: number;
};

const FlashcardInput = ({ index }: Props) => {
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
      <p>Question {index}</p>
      <input
        onChange={handleQuestionChange}
        value={question}
        className="p-1 text-red-600"
        type="text"
        placeholder="Type your question here"
      />
      <input
        onChange={handleAnswerChange}
        value={answer}
        className="p-1 text-red-600"
        type="text"
        placeholder="Type your answer here"
      />
      <div className="flex gap-2 py-2">
        <button
          className="text-left"
          onClick={() => {
            updateFlashcard(index, { id: index, question, answer });
          }}
        >
          Set flashcard
        </button>
        <button
          className="text-left"
          onClick={() => {
            deleteFlashcard(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FlashcardInput;
