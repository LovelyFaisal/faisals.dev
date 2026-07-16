import Link from "next/link";
import { ContactButton } from "./ui/button";
import { MdTerminal } from "react-icons/md";
import logo from "@/assets/projects/logo.png";
import Image from "next/image";
const navLinks = [
  { name: "المقالات", href: "/blog" },
  // { name: "المشاريع", href: "/projects" },
  { name: "عن فيصل", href: "/about" },
  { name: "كتب", href: "/books" },
  // { name: "تغريدات", href: "/tweets" },
];

export default function Header() {
  return (
    <header
      className="py-4 border-b border-white/5 bg-[#0A0A0C] sticky top-0 z-10"
      id="top"
      dir="rtl"
    >
      <div className="container flex gap-2 items-center">
        <Link className="flex flex-1 gap-3 text-xl font-bold h-full" href={"/"}>
          {/* <div className="flex justify-center items-center size-8 rounded bg-primary/20"> */}
          {/* <MdTerminal size={24} className="text-primary" /> */}
          <Image
            alt="Products"
            className="rounded"
            src={logo}
            unoptimized
            width={32}
            height={32}
          />
          {/* </div> */}
          <span className="hidden md:inline">فيصل الحربي</span>
        </Link>
        <nav className="">
          <ul className="flex h-full">
            {navLinks.map((link) => {
              return (
                <li key={link.name} className="">
                  <Link
                    className="text-sm text-[#64748B] hover:text-[#ededed] transition-colors tracking-tight py-1 px-2 md:px-3"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex-1 hidden md:flex justify-end">
          <div className="w-fit">
            <ContactButton title="تواصل معي" />
          </div>
        </div>
      </div>
    </header>
  );
}
