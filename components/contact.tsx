import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";
import { MdCode } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    url: "faisalalharbi9915@gmail.com",
    icon: <MdAlternateEmail className="text-primary text-lg" />,
  },
  // {
  //   name: "Network",
  //   url: "linkedin.com/in/faisalalharbi9",
  //   icon: <FaLinkedinIn className="text-primary text-lg" />,
  // },
  {
    name: "Code",
    url: "github.com/LovelyFaisal",
    icon: <MdCode className="text-primary text-lg" />,
  },
];
export default function Contact() {
  return (
    <div id="contact">
      <div className="px-6">
        <div className="h-[1px] bg-[linear-gradient(to_left,transparent,rgba(59,130,246,0.1),transparent)]"></div>
      </div>
      <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">تواصل معي</h1>
          <span className="bg-primary w-12 h-1 block rounded mb-6"></span>
          <p className="text-[#94A3B8] text-sm">
            أنا دائماً مهتم بالعمل على مشاريع جديدة ذات تحديات تقنية مثيرة، أو
            مناقشة الأفكار البرمجية التي تساهم في تطوير الويب العربي.
          </p>
          <p className="mt-4 text-[#94A3B8] text-sm">
            سواء كان لديك مشروع قائم يحتاج إلى تطوير، أو فكرة جديدة ترغب في
            تحويلها إلى واقع، لا تتردد في التواصل معي عبر القنوات المتاحة. سأقوم
            بالرد عليك في أقرب وقت ممكن.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {contactLinks.map((link) => {
            return (
              <Link
                href={
                  link.name === "Email"
                    ? `mailto:${link.url}`
                    : `https://www.${link.url}`
                }
                target="_blank"
                key={link.name}
                className="bg-[#131316] p-4 relative border group border-white/5 hover:border-primary/40 transition-all duration-300 rounded-lg flex items-center justify-between"
              >
                <span className="absolute inset-y-0 left-0 w-1 scale-y-0 group-hover:scale-y-100 bg-primary origin-bottom transition-transform duration-300"></span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase mb-1">
                    {link.name}
                  </span>
                  <span className="text-sm font-bold text-white font-mono">
                    {link.url}
                  </span>
                </div>
                <div className="size-8 rounded bg-primary/5 border border-primary/10 flex items-center justify-center">
                  {link.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-6">
        <div className="h-[1px] bg-[linear-gradient(to_left,transparent,rgba(59,130,246,0.1),transparent)]"></div>
      </div>
    </div>
  );
}
