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
            >
              {/* <p>Tailwind CSS</p>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_169_4)">
                  <path
                    d="M8.00049 3.19922C5.86716 3.19922 4.53382 4.26589 4.00049 6.39922C4.80049 5.33255 5.73382 4.93255 6.80049 5.19922C7.40916 5.35122 7.84382 5.79255 8.32582 6.28189C9.11049 7.07789 10.0178 7.99922 12.0005 7.99922C14.1338 7.99922 15.4672 6.93255 16.0005 4.79922C15.2005 5.86589 14.2672 6.26589 13.2005 5.99922C12.5918 5.84722 12.1572 5.40589 11.6752 4.91655C10.8912 4.12055 9.98382 3.19922 8.00049 3.19922ZM4.00049 7.99922C1.86715 7.99922 0.533822 9.06588 0.000488281 11.1992C0.800488 10.1326 1.73382 9.73255 2.80049 9.99922C3.40916 10.1512 3.84382 10.5926 4.32582 11.0819C5.11049 11.8779 6.01782 12.7992 8.00049 12.7992C10.1338 12.7992 11.4672 11.7326 12.0005 9.59922C11.2005 10.6659 10.2672 11.0659 9.20049 10.7992C8.59182 10.6472 8.15715 10.2059 7.67515 9.71655C6.89115 8.92055 5.98382 7.99922 4.00049 7.99922Z"
                    fill="#00BCFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_169_4">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
            </Link>
          </div>
          <div className="text-[#94A3B8] text-sm flex flex-col md:flex-row gap-3 select-none">
            <p>© 2025 فيصل الحربي</p>
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
          <Link
            href="https://www.linkedin.com/in/faisalalharbi9/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:opacity-75 transition-opacity"
          >
            <FaLinkedin size={16} />
          </Link>
          <FaInstagram size={16} />
        </div>
      </div>
    </div>
  );
}
