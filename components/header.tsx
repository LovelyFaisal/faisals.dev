import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "./button";
import { MdTerminal } from "react-icons/md";
const navLinks = [
  { name: "المقالات", href: "/blog" },
  { name: "المشاريع", href: "/projects" },
  { name: "عن فيصل", href: "/about" },
];

export default function Header() {
  return (
    <header
      className="py-4 border-b border-white/5 bg-[#0A0A0C] sticky top-0 z-10"
      dir="rtl"
    >
      <div className="container flex gap-2 items-center">
        <Link className="flex flex-1 gap-3 text-xl font-bold h-full" href={"/"}>
          <div className="flex justify-center items-center size-8 rounded bg-primary/20">
            <MdTerminal size={24} className="text-primary" />
          </div>
          فيصل الحربي
          {/* <Image
            className={"h-8 w-8 rounded-full object-cover"}
            src={"/static/avatar.jpeg"}
            width={1199}
            height={580}
            alt="meaningful text"
          /> */}
        </Link>

        {/* <nav className="flex items-center justify-center w-full">
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
        </nav> */}

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
        <div className="flex-1 flex justify-end">
          <div className="w-fit">
            <ContactButton title="تواصل معي" />
          </div>
        </div>
      </div>
    </header>
  );
}
