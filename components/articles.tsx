import ArticleCard from "./articleCard";
import blogs from "@/.velite/blogs.json";
import Link from "next/link";
import Heading from "./heading";
export default function Articles() {
  return (
    <section className="flex flex-col gap-6 py-10">
      <div className="flex items-center gap-1">
        <Link href="/blog">
          <Heading title="المقالات" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => {
          return <ArticleCard key={blog.slug} blog={blog} />;
        })}
      </div>
    </section>
  );
}
