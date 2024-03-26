import { create } from "zustand";

interface OptionsState {
  showOptions: boolean;
  setShowOptions: (showOptions: boolean) => void;
  displayOptions: () => void;
  hideOptions: () => void;
}

export const usePDFOptions = create<OptionsState>()((set) => ({
  showOptions: false,
  setShowOptions: (showOptions) => set({ showOptions }),
  displayOptions: () => set({ showOptions: true }),
  hideOptions: () => set({ showOptions: false }),
}));
