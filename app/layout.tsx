import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocumentComponent from "./components/DocumentComponent";
import FlashcardsOptions from "./components/FlashcardsOptions";
import PDFOptionsButton from "./components/PDFOptionsButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flashprint",
  description: "Generate your flashcards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex lg:flex-row flex-col  lg:max-h-screen justify-center overflow-none p-4">
          <FlashcardsOptions />
          {children}
          <PDFOptionsButton />
        </div>
        <DocumentComponent />
      </body>
    </html>
  );
}
