"use client";

import dynamic from "next/dynamic";
import FlashcardsDocument from "./FlashcardsDocument";
import { useFlashcardsStore } from "@/store/flashcards";
import { usePDFOptions } from "@/store/options";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading your PDF...</p>,
  }
);

const DocumentComponent = () => {
  const { flashcards } = useFlashcardsStore();
  const { currentOptions } = usePDFOptions();

  return (
    <div className="fixed lg:hidden bottom-0 w-full bg-slate-700 text-center py-2 hover:border-2 border-slate-500 cursor-pointer max-w-2xl right-[50%] translate-x-[50%]">
      <PDFDownloadLink
        // TODO: FIX Downloading PDF
        document={
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
        }
      >
        Download PDF
      </PDFDownloadLink>
    </div>
  );
};

export default DocumentComponent;
