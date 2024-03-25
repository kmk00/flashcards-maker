"use client";

import dynamic from "next/dynamic";
import FlashcardsDocument from "./FlashcardsDocument";
import { useFlashcardsStore } from "@/store/flashcards";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const ExamplePage = () => {
  const { flashcards } = useFlashcardsStore();

  return (
    <div className="hidden lg:block">
      <PDFViewer style={{ width: "100%", height: "90dvh" }}>
        <FlashcardsDocument flashcards={flashcards} />
      </PDFViewer>
    </div>
  );
};

export default ExamplePage;
