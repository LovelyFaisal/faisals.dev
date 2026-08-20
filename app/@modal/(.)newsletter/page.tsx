"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";

export default function NewsletterModal() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const close = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      await fetch(
        "https://app.audienceful.com/api/subscribe/VF9UywtdrC4WQZBkYrYrW7/",
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        dir="rtl"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-[#1c1c1c] bg-[#0E0E11] p-8 md:p-10 shadow-2xl"
      >
        <button
          onClick={close}
          className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#1c1c1c] text-[#94A3B8] transition-colors hover:border-[#292929] hover:text-white"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1c1c1c] bg-[#111114] text-2xl">
            ✉️
          </span>

          {status === "success" ? (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold md:text-2xl">شكراً لاشتراكك!</h2>
              <p className="text-sm leading-relaxed text-[#94A3B8]">
                تم تسجيل بريدك الإلكتروني بنجاح. ستصلك المقالات الجديدة مباشرة.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold md:text-2xl">
                  مقال أسبوعيّاً. في البرمجة. مجّاناً.
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3"
              >
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "submitting"}
                    className="flex-1 rounded-lg border border-[#1c1c1c] bg-[#111114] px-4 py-3 text-sm text-white placeholder-[#94A3B8] outline-none transition-colors focus:border-primary disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85 disabled:opacity-50"
                  >
                    {status === "submitting" ? "جاري الإرسال..." : "اشتراك"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
