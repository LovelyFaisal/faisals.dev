import Link from "next/link";
import AnimatedItem from "@/components/animatedItem";
import Image from "next/image";
export default function Page() {
  return (
    <div className="container">
      {" "}
      <div className="container">
        <div className="pt-20 pb-6">
          <div className="flex flex-col gap-2.5">
            <AnimatedItem delay={0}>
              <h1 className="text-[28px] text-[#ededed]">المشاريع</h1>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-base text-[#ababab]">
                {/* ٦،٤٠٠ خبير عربي يتابعون النشرة البريديّة */}
              </p>
            </AnimatedItem>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="/Digital Global Network Map-0a1f992f.png"
            className="w-full h-[170px] object-cover"
            alt="Picture"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
