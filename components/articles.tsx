import ArticleCard from "./article-card";
import blogs from "@/.velite/blogs.json";
import Link from "next/link";
import Heading from "./heading";
import ArticleCard2 from "./article-card2";
import readingTime from "reading-time";

export default function Articles() {
  blogs.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
  return (
    <section className="flex flex-col gap-10 py-10">
      <div className="flex items-center gap-1">
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">آخر المقالات</h2>
            <p className="text-[#64748B] text-sm">أشارك أفكاري وتجاربي</p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 hover:opacity-75 transition-opacity group"
          >
            <p className="text-blue-500 font-semibold text-sm">مشاهدة الكل</p>
            <svg
              width="18"
              height="18"
              className="rotate-180 group-hover:-translate-x-0.5 transition-transform"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 9L14.25 9M14.25 9L9 3.75M14.25 9L9 14.25"
                className="text-blue-500"
                stroke="#2B7EFD"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* different layout */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => {
          if (blog.isPublished) {
            return <ArticleCard key={blog.slug} blog={blog} />;
          }
        })}
      </div> */}

      <div className="divide-y divide-white/[0.03]">
        {blogs.map((blog) => {
          if (blog.isPublished) {
            return <ArticleCard2 key={blog.slug} blog={blog} />;
          }
        })}
      </div>
    </section>
  );
}
