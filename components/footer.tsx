"use client";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    const t = date.toLocaleTimeString("ar-SA", {
      timeZone: "Asia/Riyadh",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      numberingSystem: "arab",
    });
    setTime(t);
  }, []);

  return (
    <div className="border-t border-[#1C1C1C]">
      <div className="container pt-6 pb-8 flex flex-col md:flex-row justify-between gap-2 md:gap-0 md:items-end">
        <div className="flex flex-col gap-2">
          <div className="flex font-medium gap-2 items-center text-lg text-[#ededed]">
            <p className="select-none">صُنع بـ</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_169_10)">
                <path
                  d="M10.835 1.46797C9.55058 0.373434 7.64042 0.570309 6.46152 1.78672L5.9998 2.2625L5.53808 1.78672C4.36152 0.570309 2.44902 0.373434 1.16464 1.46797C-0.307232 2.72422 -0.384576 4.9789 0.932612 6.34062L5.46777 11.0234C5.76074 11.3258 6.23652 11.3258 6.52949 11.0234L11.0646 6.34062C12.3842 4.9789 12.3068 2.72422 10.835 1.46797Z"
                  fill="#FB2C36"
                />
              </g>
              <defs>
                <clipPath id="clip0_169_10">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="select-none">باستخدام</p>

            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:opacity-75 transition-opacity"
            >
              <p>Next.js</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_169_7)">
                  <path
                    d="M12.4433 14.652C11.172 15.5033 9.64333 16 8 16C3.58467 16 0 12.4153 0 8C0 3.58467 3.58467 0 8 0C12.4153 0 16 3.58467 16 8C16 10.3887 14.9507 12.534 13.2887 14.0007L6.146 4.8H4.8V11.1973H5.87667V6.16733L12.4433 14.652ZM10.222 8.96333L11.2887 10.3373V4.8H10.222V8.96333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_169_7">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>

            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:opacity-75 transition-opacity"
            ></Link>
          </div>
          <div className="text-[#94A3B8] text-sm flex flex-col md:flex-row gap-3 select-none">
            <p>© 2026 فيصل الحربي</p>
            <p className="hidden md:block">.</p>
            <p className="select-text">faisalalharbi9915@gmail.com</p>
            <p className="hidden md:block">.</p>
            <div className="flex gap-2">
              <p>{time}</p>
              <p>القصيم 🇸🇦</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Link
            href="https://github.com/LovelyFaisal"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:opacity-75 transition-opacity"
          >
            <FaGithub size={16} />
          </Link>
          {/* <Link
            href="https://www.linkedin.com/in/faisalalharbi9/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:opacity-75 transition-opacity"
          >
            <FaLinkedin size={16} />
          </Link> */}
          {/* <FaInstagram size={16} /> */}
        </div>
      </div>
    </div>
  );
}
