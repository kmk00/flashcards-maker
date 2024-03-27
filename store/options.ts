import { create } from "zustand";

enum Mode {
  Fold = "fold",
  Single = "single",
}

export const usePDFOptions = create<OptionsState>()((set) => ({
  currentOptions: {
    mode: Mode.Fold,
    questionColor: "#000000",
    answerColor: "#000000",
    questionFontSize: 16,
    answerFontSize: 14,
    width: 195,
    height: 195,
  },
  showOptions: false,
  setNewOptions: (newOptions: PDFOptions) =>
    set({ currentOptions: newOptions }),
  displayOptions: () => set({ showOptions: true }),
  hideOptions: () => set({ showOptions: false }),
}));
