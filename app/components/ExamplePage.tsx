"use client";

import dynamic from "next/dynamic";
import FlashcardsDocument from "./FlashcardsDocument";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const ExamplePage = () => {
  return (
    <div className="hidden lg:block">
      <PDFViewer style={{ width: "100%", height: "90dvh" }}>
        <FlashcardsDocument />
      </PDFViewer>
    </div>
  );
};

export default ExamplePage;
