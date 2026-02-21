import blogs from "@/.velite/blogs.json";
import Link from "next/link";
import ArticleCard from "@/components/articleCard";
import AnimatedItem from "@/components/animatedItem";
import ArticleCard2 from "@/components/articleCard2";

const categories = [
  ...new Map(blogs.map((blog) => [blog.category.slug, blog.category])).values(),
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = categories.find((category) => category.slug === slug)?.name;
  return {
    title,
  };
}

export function generateStaticParams() {
  return categories;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filteredblogs = blogs.filter((blog) => blog.category.slug === slug);
  const title = categories.find((category) => category.slug === slug)?.name;

  return (
    <div className="container">
      <div className="pt-20 pb-6">
        <div className="flex flex-col gap-2.5">
          <AnimatedItem delay={0}>
            <h1 className="text-3xl font-bold text-[#ededed]">{title}</h1>
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
            className="px-5 py-2 rounded-full bg-[#131316] text-white text-sm font-medium border border-white/5 hover:border-white/20 transition-all"
            href="/blog"
          >
            الكل
          </Link>

          {categories.map((category) => {
            const isActive = slug === category.slug;

            return (
              <Link
                className={`px-5 py-2 rounded-full ${isActive ? "bg-primary border-primary shadow-lg shadow-primary/20" : "bg-[#131316] border-white/5 hover:border-white/20"} text-white text-sm font-medium border   transition-all`}
                key={category.name}
                href={`/categories/${category.slug}`}
              >
                {category.name}
              </Link>

              // <Link key={category.name} href={`/categories/${category.slug}`}>
              //   <button
              //     className={`py-1 px-2.5 rounded-md w-fit cursor-pointer transition-colors ${
              //       isActive
              //         ? "bg-[#ff7b0f] text-white" // Active styles
              //         : "bg-[#2e1e16] text-[#ff7b0f]" // Default styles
              //     }`}
              //   >
              //     <p className="text-base">{category.name}</p>
              //   </button>
              // </Link>
            );
          })}
        </div>
      </AnimatedItem>

      {/* <AnimatedItem delay={0.3}>
        <div className="grid grid-cols-2 gap-4">
          {filteredblogs.map((blog) => {
            if (blog.isPublished) {
              return <ArticleCard key={blog.slug} blog={blog} />;
            }
          })}
        </div>
      </AnimatedItem> */}

      <AnimatedItem delay={0.3}>
        <div className="divide-y divide-white/[0.03] pb-10">
          {filteredblogs.map((blog) => {
            if (blog.isPublished) {
              return <ArticleCard2 key={blog.slug} blog={blog} />;
            }
          })}
        </div>
      </AnimatedItem>
    </div>
  );
}
