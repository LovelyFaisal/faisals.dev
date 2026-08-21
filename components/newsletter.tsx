import Link from "next/link";

export default function Newsletter() {
  return (
    <div className="Newsletter">
      <section className="relative overflow-hidden rounded-2xl border border-[#1c1c1c] bg-gradient-to-bl from-[#0E0E11] via-[#111114] to-[#0E0E11] px-6 py-10 md:px-12 md:py-14">
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-primary/5 blur-2xl" />

        <div className="relative z-[5] flex flex-col items-center gap-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1c1c1c] bg-[#0E0E11] text-2xl">
            ✉️
          </span>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold md:text-3xl">
              مقال أسبوعيّاً. في البرمجة. مجّاناً.
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-[#94A3B8]">
              احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك
              الإلكتروني.
            </p>
          </div>

          <Link
            href="/newsletter"
            scroll={false}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            اشترك الآن
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5-7 7 7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
