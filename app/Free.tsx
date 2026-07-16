"use client";
import Image from "next/image";
import ProductCard from "./productCard";
import DownloadInput from "@/components/DownloadInput";
import { useState, useEffect } from "react";
export default function Free() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex items-center gap-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">مصادر مجّانيّة</h2>
          {/* <p className="text-[#64748B] text-sm">
            بنية تحتية متكاملة وأدوات تطوير احترافية
          </p> */}
        </div>
      </div>
      <div className="grid md:grid-cols-1 gap-4">
        <ProductCard setIsOpen={setOpen} />
        {isOpen && (
          <div className="fixed flex w-full h-full items-center justify-center z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DownloadInput setIsOpen={setOpen} />
          </div>
        )}
      </div>
    </section>
  );
}
