"use client";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";
export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const click = () => {
    if (copied) {
      return;
    }
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      onClick={click}
      className="bg-[#171717] hover:bg-[#212121] transition-colors cursor-pointer w-[32px] h-[32px] flex items-center justify-center rounded-lg"
    >
      {copied ? <IoCheckmark size={16} /> : <IoCopyOutline size={16} />}
    </div>
  );
}
