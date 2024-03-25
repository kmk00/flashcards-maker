"use client";

import dynamic from "next/dynamic";
import FlashcardsDocument from "./FlashcardsDocument";
import { useFlashcardsStore } from "@/store/flashcards";
import Spinner from "./Spinner";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

const ExamplePage = () => {
  const { flashcards } = useFlashcardsStore();

  return (
    <PDFViewer style={{ width: "100%", height: "90dvh" }}>
      <FlashcardsDocument flashcards={flashcards} />
    </PDFViewer>
  );
};

export default ExamplePage;
