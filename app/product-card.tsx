import Image from "next/image";
import roadmap from "@/assets/roadmap.png";
import { FiDownload } from "react-icons/fi";

export default function ProductCard({ setIsOpen }: any) {
  return (
    <div className="border border-[#1c1c1c] rounded-xl py-3 px-4">
      <div className="flex flex-col gap-4">
        <div className="relative w-full rounded-md aspect-video overflow-hidden">
          <Image src={roadmap} alt="Picture" fill className="object-cover" />
        </div>
        <div className="text-[#94A3B8]">
          <p>خريطة هندسة الباك اند</p>
          <p>
            خريطة لتعلم هندسة البرمجيات تحديداً الباك اند تحتوي على جميع المصادر
            والكتب
          </p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm w-full flex cursor-pointer justify-center items-center gap-2 font-bold py-2 px-4 bg-primary hover:opacity-80 transition-opacity rounded-lg"
        >
          <FiDownload size={16} />
          تحميل
        </button>
      </div>
    </div>
  );
}
