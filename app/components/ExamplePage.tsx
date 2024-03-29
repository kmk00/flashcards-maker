"use client";

import dynamic from "next/dynamic";
import FlashcardsDocument from "./FlashcardsDocument";
import { useFlashcardsStore } from "@/store/flashcards";
import Spinner from "./Spinner";
import { usePDFOptions } from "@/store/options";
import PDFOptionsComponent from "./PDFOptionsComponent";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

const ExamplePage = () => {
  const { flashcards } = useFlashcardsStore();
  const { showOptions, currentOptions } = usePDFOptions();

  return (
    <>
      {!showOptions ? (
        <div className="hidden w-full lg:block ">
          <PDFViewer style={{ width: "100%", height: "90dvh" }}>
            <FlashcardsDocument
              questionColor={currentOptions.questionColor}
              answerColor={currentOptions.answerColor}
              questionFontSize={currentOptions.questionFontSize}
              answerFontSize={currentOptions.answerFontSize}
              width={currentOptions.width}
              height={currentOptions.height}
              mode={currentOptions.mode}
              flashcards={flashcards}
            />
          </PDFViewer>
        </div>
      ) : (
        <PDFOptionsComponent />
      )}
    </>
  );
};

export default ExamplePage;
