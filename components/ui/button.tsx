"use client";
import Link from "next/link";

type Button = {
  title: string;
  subtitle: string;
};
import * as motion from "motion/react-client";

const circleVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Button({ title, subtitle }: Button) {
  return (
    <motion.div
      variants={circleVariants}
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
    >
      <div className="bg-[#171717] py-3 px-4 rounded-xl md:w-[200px] border border-[#1c1c1c] hover:border-[#292929] transition-colors duration-300 leading-5 flex gap-2.5 group">
        <div className="flex flex-col gap-0.5 w-full">
          <p className="text-[#ababab] text-sm tracking-tight">{title}</p>
          <p className="text-[#ededed] text-sm  tracking-tight">{subtitle}</p>
        </div>

        <motion.div className="flex gap-0.5 h-4 justify-center items-center">
          <motion.div
            variants={{ hover: { x: `calc(-100% - 2px)`, opacity: 1 } }}
            className="bg-[#ababab] w-[3px] h-[3px] rounded-xs opacity-40"
          ></motion.div>

          <motion.div
            variants={{ hover: { x: `calc(100% + 2px)`, opacity: 1 } }}
            className="bg-[#ababab] w-[3px] h-[3px] rounded-xs opacity-40"
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export function ContactButton({ title }: { title: string }) {
  return (
    <motion.div whileHover="hover">
      <a
        className="py-2 pl-3.5 pr-3 flex gap-2 items-center text-[13px] font-medium text-[#ededed] border border-[#292929] hover:border-[#363636] rounded-[10px] hover:bg-[#171717] transition-colors"
        href="#contact"
      >
        {title}
        <motion.div className="flex gap-0.5 h-4 justify-center items-center">
          <motion.div
            variants={{ hover: { x: `calc(-100% - 2px)`, opacity: 1 } }}
            className="bg-[#ababab] w-[3px] h-[3px] rounded-xs opacity-40"
          ></motion.div>

          <motion.div
            variants={{ hover: { x: `calc(100% + 2px)`, opacity: 1 } }}
            className="bg-[#ababab] w-[3px] h-[3px] rounded-xs opacity-40"
          ></motion.div>
        </motion.div>
      </a>
    </motion.div>
  );
}
