export default function Education() {
  return (
    <div className="flex flex-col gap-6 py-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">التعليم</h2>
        <p className="text-[#64748B] text-sm">المسار الأكاديمي والشهادات</p>
      </div>

      <div className="relative border-r border-white/10 mr-2">
        <div className="relative pr-6">
          <div className="absolute right-[-5.5px] top-1.5 size-2.5 rounded-full bg-primary border-2 border-[rgb(10,10,12)] ring-2 ring-primary/20"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
            <h3 className="font-bold text-white text-[18.2px]">
              بكالوريوس تقنية معلومات
            </h3>
            <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 w-fit">
              2024 - 2028
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium mb-1">
            الجامعة السعودية الالكترونية
          </p>
        </div>
      </div>
    </div>
  );
}
