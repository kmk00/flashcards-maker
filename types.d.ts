type Flashcard = {
  id: string;
  questionNumber: number;
  question: string;
  answer: string;
};

//Options types

type PDFOptions = {
  width: number;
  questionColor: string;
  answerColor: string;
  questionFontSize: number;
  answerFontSize: number;
  height: number;
  mode: Mode;
};

interface OptionsState {
  currentOptions: PDFOptions;
  showOptions: boolean;
  setNewOptions: (showOptions: PDFOptions) => void;
  displayOptions: () => void;
  hideOptions: () => void;
}
