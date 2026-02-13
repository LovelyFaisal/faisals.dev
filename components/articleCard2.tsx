import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/.velite/index";
import { IoMdArrowDropleft } from "react-icons/io";
interface BlogCardProps {
  blog: Blog;
}

export default function ArticleCard2({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="flex flex-col gap-2 pb-8 py-8 first:pt-0 last:pb-0 group"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
          {blog.title}
        </h2>
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-[#94A3B8]">
            {new Date(blog.publishedAt).toLocaleDateString("ar-SA", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="size-1 rounded-full bg-slate-800"></span>
          <span className="text-primary hover:text-white transition-colors flex items-center gap-1">
            اقرأ المزيد
            <IoMdArrowDropleft />
          </span>
        </div>
      </div>
    </Link>
  );
}
