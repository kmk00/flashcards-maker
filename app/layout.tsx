import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DocumentComponent from "./components/DocumentComponent";
import Options from "./components/Options";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex max-h-screen overflow-none p-4">
          <Options />
          {children}
        </div>
        <DocumentComponent />
      </body>
    </html>
  );
}
