import blogs from "@/.velite/blogs.json";
import ArticleCard from "../../components/articleCard";
import Link from "next/link";
import AnimatedItem from "@/components/animatedItem";
import ArticleCard2 from "@/components/articleCard2";

export default function Page() {
  const categories = [
    ...new Map(
      blogs
        .filter((blog) => blog.isPublished)
        .map((blog) => [blog.category.slug, blog.category]),
    ).values(),
  ];
  return (
    <div className="container">
      <div className="pt-20 pb-6">
        <div className="flex flex-col gap-2.5">
          <AnimatedItem delay={0}>
            <h1 className="text-3xl font-bold text-[#ededed]">الأفكار</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-base text-[#94A3B8]">
              مقالات تقنية, دروس تعليمية, وأفكار حول هندسة البرمجيات وتطوير
              الويب الحديث.
            </p>
          </AnimatedItem>
        </div>
      </div>
      <AnimatedItem delay={0.3}>
        <div className="flex gap-2 mb-4 justify-end flex-wrap">
          <Link
            href="/blog"
            className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium border border-primary shadow-lg shadow-primary/20 transition-all"
          >
            الكل
          </Link>
          {categories.map((category) => {
            return (
              <Link
                className="px-5 py-2 rounded-full bg-[#131316] text-white text-sm font-medium border border-white/5 hover:border-white/20 transition-all"
                key={category.name}
                href={`/categories/${category.slug}`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </AnimatedItem>

      {/* old layout */}

      {/* <AnimatedItem delay={0.3}>
        <div className="grid grid-cols-2 gap-4">
          {blogs.map((blog) => {
            if (blog.isPublished) {
              return <ArticleCard key={blog.slug} blog={blog} />;
            }
          })}
        </div>
      </AnimatedItem> */}

      <AnimatedItem delay={0.3}>
        <div className="divide-y divide-white/[0.03] pb-10">
          {blogs.map((blog) => {
            if (blog.isPublished) {
              return <ArticleCard2 key={blog.slug} blog={blog} />;
            }
          })}
        </div>
      </AnimatedItem>
    </div>
  );
}
