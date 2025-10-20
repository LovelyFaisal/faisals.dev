import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "./button";
const navLinks = [
  { name: "المقالات", href: "/blog" },
  { name: "المشاريع", href: "/projects" },
  { name: "عن فيصل", href: "/about" },
];

export default function Header() {
  return (
    <header
      className="py-4 border-b border-[#1c1c1c] bg-[#0f0f0f] sticky top-0 z-10"
      dir="rtl"
    >
      <div className="container flex gap-2 items-center">
        <Link href={"/"}>
          <Image
            className={"h-8 w-8 rounded-full object-cover"}
            src={"/static/avatar.jpeg"}
            width={1199}
            height={580}
            alt="meaningful text"
          />
        </Link>

        <nav className="flex justify-between items-center w-full">
          <ul className="flex h-full">
            {navLinks.map((link) => {
              return (
                <li key={link.name} className="">
                  <Link
                    className="text-sm text-[#ababab] hover:text-[#ededed] transition-colors tracking-tight py-1 px-3"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ContactButton title="تواصل معي" />
        </nav>
      </div>
    </header>
  );
}
