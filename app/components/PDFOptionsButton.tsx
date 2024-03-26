"use client";

import { usePDFOptions } from "@/store/options";
import Image from "next/image";

const PDFOptionsButton = () => {
  const { displayOptions, showOptions } = usePDFOptions();

  return (
    <>
      {!showOptions && (
        <button
          className="fixed bottom-5 right-5 text-center"
          onClick={displayOptions}
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
