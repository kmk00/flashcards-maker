import { create } from "zustand";

interface FlashcardState {
  flashcards: Flashcard[];
  addFlashcard: (flashcard: Flashcard) => void;
  updateFlashcard: (id: number, flashcard: Flashcard) => void;
  deleteFlashcard: (id: number) => void;
}

export const useFlashcardsStore = create<FlashcardState>()((set) => ({
  flashcards: [
    {
      id: 1,
      question: "Type your question here",
      answer: "Type your answer here",
    },
  ],
  addFlashcard: (flashcard: Flashcard) =>
    set((state) => ({ flashcards: [...state.flashcards, flashcard] })),
  updateFlashcard: (id: number, flashcard: Flashcard) =>
    set((state) => ({
      flashcards: state.flashcards.map((card) => {
        if (card.id === id) {
          return flashcard;
        }
        return card;
      }),
    })),
  deleteFlashcard: (id: number) =>
    set((state) => ({
      flashcards: state.flashcards.filter((card) => card.id !== id),
    })),
}));
