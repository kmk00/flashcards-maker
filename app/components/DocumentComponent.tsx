"use client";

import dynamic from "next/dynamic";
import FlashcardsDocument from "./FlashcardsDocument";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading your PDF...</p>,
  }
);

const DocumentComponent = () => {
  return (
    <div className="fixed lg:hidden bottom-0 w-full bg-slate-700 text-center py-2 hover:border-2 border-slate-500 cursor-pointer max-w-2xl right-[50%] translate-x-[50%]">
      <PDFDownloadLink document={<FlashcardsDocument />}>
        Download PDF
      </PDFDownloadLink>
    </div>
  );
};

export default DocumentComponent;
