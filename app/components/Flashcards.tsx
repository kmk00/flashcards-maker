"use client";

import { useFlashcardsStore } from "@/store/flashcards";
import FlashcardInput from "./FlashcardInput";

const Flashcards = () => {
  const { flashcards, addFlashcard } = useFlashcardsStore();

  const addNewFlashcard = () => {
    addFlashcard({
      id: flashcards.length + 1,
      question: "Type your question here",
      answer: "Type your answer here",
    });
  };

  return (
    <>
      <h1 className="text-2xl">Create Flashcards</h1>
      <button className="mt-3 mx-auto" onClick={addNewFlashcard}>
        Add new
      </button>
      <div className="w-full flex-col-reverse flex">
        {flashcards.map((flashcard) => (
          <FlashcardInput key={flashcard.id} index={flashcard.id} />
        ))}
      </div>
    </>
  );
};

export default Flashcards;
