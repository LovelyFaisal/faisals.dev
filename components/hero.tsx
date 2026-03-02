import AnimatedItem from "./animatedItem";
import { LuDownload } from "react-icons/lu";
export default function Hero() {
  return (
    <section className="pt-[64px] md:pt-24 md:pb-24 pb-8 flex flex-col gap-8">
      <div className="max-w-[280px] md:max-w-[62%] flex flex-col gap-4">
        <AnimatedItem delay={0}>
          <h1 className="text-4xl font-bold leading-[1.2]">
            انا <span className="text-primary italic">فيصل الحربي</span> متخصص
            في تطوير الويب وبناء الحلول الرقمية
          </h1>
        </AnimatedItem>
        <AnimatedItem delay={0.2}>
          <p className="font-light text-[#94A3B8]">
            أقوم بتحويل الأفكار المعقدة إلى واجهات برمجية بسيطة وفعالة. متخصص في
            تطوير الويب الحديث باستخدام أحدث التقنيات لضمان الأداء والجودة.
          </p>
        </AnimatedItem>
      </div>
      <div
        className="flex flex-col md:flex-row 
      gap-4"
      >
        <a
          href=""
          className="bg-blue-500 hover:opacity-80 transition-opacity w-fit rounded-lg py-3 px-6 font-bold text-sm flex items-center gap-2"
        >
          <LuDownload className="" />
          تحميل السيرة الذاتية
        </a>
        <a
          href=""
          className="bg-[#0E0E11] py-3 px-6 w-fit rounded-lg font-medium text-sm border border-[#1c1c1c] hover:border-[#292929] transition-colors"
        >
          استعراض المشاريع
        </a>
      </div>
    </section>
  );
}
