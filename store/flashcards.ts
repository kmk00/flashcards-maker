import { create } from "zustand";
import { nanoid } from "nanoid";

interface FlashcardState {
  flashcards: Flashcard[];
  addFlashcard: (flashcard: Flashcard) => void;
  updateFlashcard: (id: string, flashcard: Flashcard) => void;
  deleteFlashcard: (id: string) => void;
}

export const useFlashcardsStore = create<FlashcardState>()((set) => ({
  flashcards: [
    {
      id: nanoid(),
      questionNumber: 1,
      question: "Type your question",
      answer: "Type your answer",
    },
  ],
  addFlashcard: (flashcard: Flashcard) =>
    set((state) => ({ flashcards: [...state.flashcards, flashcard] })),
  updateFlashcard: (id: string, flashcard: Flashcard) =>
    set((state) => ({
      flashcards: state.flashcards.map((card) => {
        if (card.id === id) {
          return flashcard;
        }
        return card;
      }),
    })),
  deleteFlashcard: (id: string) => {
    set((state) => ({
      flashcards: state.flashcards.filter((card) => card.id !== id),
    }));
    set((state) => ({
      flashcards: state.flashcards.map((card, index) => ({
        ...card,
        questionNumber: index + 1,
      })),
    }));
  },
}));
