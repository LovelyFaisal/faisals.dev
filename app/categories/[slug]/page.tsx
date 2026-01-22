import blogs from "@/.velite/blogs.json";
import Link from "next/link";
import ArticleCard from "@/components/articleCard";
import AnimatedItem from "@/components/animatedItem";

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
            <h1 className="text-[28px] text-[#ededed]">{title}</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-base text-[#ababab]">
              ٦،٤٠٠ خبير عربي يتابعون النشرة البريديّة
            </p>
          </AnimatedItem>
        </div>
      </div>

      <div className="flex gap-2 mb-4 justify-end">
        <Link href="/blog">
          <button className="py-1 px-2.5 bg-[#2e1e16] rounded-md w-fit cursor-pointer">
            <p className="text-base text-[#ff7b0f]">الكل</p>
          </button>
        </Link>
        {categories.map((category) => (
          <Link key={category.name} href={`/categories/${category.slug}`}>
            <button className="py-1 px-2.5 bg-[#2e1e16] rounded-md w-fit cursor-pointer">
              <p className="text-base text-[#ff7b0f]">{category.name}</p>
            </button>
          </Link>
        ))}
      </div>
      <AnimatedItem delay={0.3}>
        <div className="grid grid-cols-2 gap-4">
          {filteredblogs.map((blog) => {
            if (blog.isPublished) {
              return <ArticleCard key={blog.slug} blog={blog} />;
            }
          })}
        </div>
      </AnimatedItem>
    </div>
  );
}
