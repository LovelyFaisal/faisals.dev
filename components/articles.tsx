import ArticleCard from "./articleCard";
import blogs from "@/.velite/blogs.json";
import Link from "next/link";

export default function Articles() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex items-center gap-1">
        <Link href="/blog">
          <div className="flex items-center gap-1">
            <h2 className="font-medium text-lg text-[#ededed]">المقالات</h2>
            <svg
              width="18"
              height="18"
              className="rotate-180"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 9L14.25 9M14.25 9L9 3.75M14.25 9L9 14.25"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {blogs.map((blog) => {
          return <ArticleCard key={blog.slug} blog={blog} />;
        })}
      </div>
    </section>
  );
}
