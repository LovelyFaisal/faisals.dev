"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsletterPage() {
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
    <main
      dir="rtl"
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#1c1c1c] bg-gradient-to-bl from-[#0E0E11] via-[#111114] to-[#0E0E11] p-8 md:p-12 shadow-2xl">
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary/5 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1c1c1c] bg-[#0E0E11] text-2xl">
            ✉️
          </span>

          {status === "success" ? (
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold md:text-3xl">
                شكراً لاشتراكك!
              </h1>
              <p className="text-sm leading-relaxed text-[#94A3B8]">
                تم تسجيل بريدك الإلكتروني بنجاح. ستصلك المقالات الجديدة مباشرة.
              </p>
              <Link
                href="/"
                className="mx-auto inline-flex items-center gap-2 rounded-lg bg-[#0E0E11] border border-[#1c1c1c] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#292929]"
              >
                العودة للرئيسية
              </Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold md:text-3xl">
                  اشترك في النشرة البريدية
                </h1>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-[#94A3B8]">
                  مقال أسبوعيّاً في البرمجة وتطوير الويب. احصل على أحدث المقالات
                  والنصائح التقنية مباشرة في بريدك الإلكتروني، بدون إزعاج.
                </p>
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
      </div>
    </main>
  );
}
