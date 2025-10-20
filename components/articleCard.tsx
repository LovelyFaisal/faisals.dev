import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/.velite/index";

interface BlogCardProps {
  blog: Blog;
}

export default function ArticleCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="w-full flex gap-2.5 py-3 rounded-xl px-4 bg-[#0f0f0f] border border-[#1c1c1c] hover:border-[#292929] transition-colors duration-300"
    >
      <Image
        src={blog.image.src}
        alt="Picture"
        className="rounded-md object-cover w-[100px] aspect-square"
        width={blog.image.width}
        height={blog.image.height}
      />
      <div className="flex flex-col justify-center font-medium gap-2">
        <h2 className=" text-[#ededed] text-base">{blog.title}</h2>

        <div className="flex flex-col gap-1">
          <h3 className=" text-[#ababab] text-sm">
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </h3>
          <div className="flex gap-1 text-xs">
            <div className="bg-[#171717] py-1.5 px-2 text-[#ababab] rounded-md">
              {blog.category.name}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
