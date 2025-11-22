"use client";
import * as motion from "motion/react-client";
import { Variants } from "framer-motion";
import Button from "@/components/button";
import Link from "next/link";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1, staggerChildren: 0.1, when: "beforeChildren" },
  },
};
const childvariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export default function ContactButtons() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="gap-4 flex flex-col md:flex-row"
      variants={variants}
    >
      <motion.div variants={childvariant}>
        <Link href="/blog">
          <Button title="المقالات" subtitle="تصفح المقالات" />
        </Link>
      </motion.div>
      <motion.div variants={childvariant}>
        <Link href="/">
          <Button title="أبدا معي" subtitle="احجز استشارة" />
        </Link>
      </motion.div>
      <motion.div variants={childvariant}>
        <Link href="/contact">
          <Button title="تواصل" subtitle="تواصل معي" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
