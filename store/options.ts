import { create } from "zustand";

enum Mode {
  Fold = "fold",
  Single = "single",
  Reverse = "reverse",
}

export const usePDFOptions = create<OptionsState>()((set) => ({
  currentOptions: {
    mode: Mode.Fold,
    questionColor: "#000000",
    answerColor: "#000000",
    width: 250,
    height: 250,
  },
  showOptions: false,
  setNewOptions: (newOptions: PDFOptions) =>
    set({ currentOptions: newOptions }),
  displayOptions: () => set({ showOptions: true }),
  hideOptions: () => set({ showOptions: false }),
}));
