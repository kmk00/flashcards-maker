"use client";

import { usePDFOptions } from "@/store/options";
import Image from "next/image";

const PDFOptionsButton = () => {
  const { displayOptions, showOptions } = usePDFOptions();

  const handleButtonClick = () => {
    displayOptions();
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!showOptions && (
        <button
          className="fixed lg:bottom-5 bottom-10 right-5 text-center"
          onClick={handleButtonClick}
        >
          <Image
            className="cursor-pointer hover:animate-spin"
            src="/settings.svg"
            width={80}
            height={80}
            alt="Settings"
          />
        </button>
      )}
    </>
  );
};

export default PDFOptionsButton;
