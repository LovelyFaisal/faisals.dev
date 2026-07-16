"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function DownloadInput({ setIsOpen }: any) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      await fetch(
        "https://app.audienceful.com/api/subscribe/oLupswhLAuNrvMMqDAx8Ue/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
          mode: "no-cors",
        },
      );

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#0A0A0C] p-6 border border-white/5 text-white rounded-xl shadow-md text-right">
      <IoMdClose
        className="mb-1 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />

      {status === "success" ? (
        <div className="p-6 rounded-lg text-center font-medium">
          شكراً لك! تم إرسال خريطة الطريق إلى بريدك الإلكتروني.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-bold mb-2">تحميل خريطة الطريق</h3>
          <p className="text-sm text-gray-600 mb-4">بريدك الالكتروني</p>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full cursor-pointer py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition"
          >
            {status === "submitting"
              ? "جاري الإرسال..."
              : "أشترك في النشرة وأحصل على الملف  "}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
