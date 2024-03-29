"use client";

import { useFlashcardsStore } from "@/store/flashcards";
import FlashcardInput from "./FlashcardInput";
import { nanoid } from "nanoid";

const Flashcards = () => {
  const { flashcards, addFlashcard } = useFlashcardsStore();

  const addNewFlashcard = () => {
    addFlashcard({
      id: nanoid(),
      questionNumber: flashcards.length + 1,
      question: "Type your question here",
      answer: "Type your answer here",
    });
  };

  return (
    <div className="flex-1 w-full">
      <h1 className="text-2xl text-center">Create Flashcards</h1>
      <button
        className="mt-3 w-full my-2 py-3 bg-slate-600"
        onClick={addNewFlashcard}
      >
        Add new
      </button>
      <div className="w-full flex-col-reverse flex">
        {flashcards.map((flashcard) => (
          <FlashcardInput
            key={flashcard.id}
            id={flashcard.id}
            questionNumber={flashcard.questionNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
