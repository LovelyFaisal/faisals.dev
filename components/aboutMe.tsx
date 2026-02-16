import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdTrendingUp } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
export default function Aboutme() {
  return (
    <div>
      <div className="px-6">
        <div className="h-[1px] bg-[linear-gradient(to_left,transparent,rgba(59,130,246,0.1),transparent)]"></div>
      </div>
      <section className="py-14" id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 flex flex-col gap-6 md:order-2 order-1">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-white">من أنا</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-4">
              <p className="text-base text-slate-300 leading-relaxed font-light">
                أنا مطور واجهات خلفية وبنية تحتية بخبرة تزيد عن 5 سنوات. شغفي
                يكمن في ابتكار حلول برمجية تجمع بين الأداء العالي والقابلية
                للتوسع، مع التركيز العميق على هندسة النظم الموزعة.
              </p>
              <p className="text-slate-400 text-base-body leading-relaxed">
                بدأت رحلتي في عالم البرمجة من خلال بناء أنظمة صغيرة، وتطورت
                لأعمل اليوم مع شركات تقنية رائدة لتطوير منصات رقمية تخدم آلاف
                المستخدمين يومياً. أؤمن بأن الكود النظيف هو أساس أي منتج ناجح.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-5 border-t md:border-t-0 md:border-r border-white/10 md:pr-8 pt-8 md:pt-0 order-1 md:order-2">
            <h3 className="text-xs-meta uppercase tracking-widest text-slate-500 font-bold mb-2">
              الركائز الأساسية
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4 group">
                <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MdOutlineVerifiedUser />
                </div>
                <span className="text-lg-sub font-semibold text-white group-hover:text-primary transition-colors">
                  الجودة
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MdTrendingUp />
                </div>
                <span className="text-lg-sub font-semibold text-white group-hover:text-primary transition-colors">
                  التوسع
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MdLockOutline />
                </div>
                <span className="text-lg-sub font-semibold text-white group-hover:text-primary transition-colors">
                  الأمان
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="px-6">
        <div className="h-[1px] bg-[linear-gradient(to_left,transparent,rgba(59,130,246,0.1),transparent)]"></div>
      </div>
    </div>
  );
}
