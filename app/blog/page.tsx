import blogs from "@/.velite/blogs.json";
import ArticleCard from "../../components/articleCard";
import Link from "next/link";
import AnimatedItem from "@/components/animatedItem";

export default function Page() {
  const categories = [
    ...new Map(
      blogs.map((blog) => [blog.category.slug, blog.category])
    ).values(),
  ];
  return (
    <div className="container">
      <div className="pt-20 pb-6">
        <div className="flex flex-col gap-2.5">
          <AnimatedItem delay={0}>
            <h1 className="text-[28px] text-[#ededed]">الأفكار</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <p className="text-base text-[#ababab]">
              ٦،٤٠٠ خبير عربي يتابعون النشرة البريديّة
            </p>
          </AnimatedItem>
        </div>
      </div>
      <AnimatedItem delay={0.3}>
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
      </AnimatedItem>
      <AnimatedItem delay={0.3}>
        <div className="grid grid-cols-2 gap-4">
          {blogs.map((blog) => {
            if (blog.isPublished) {
              return <ArticleCard key={blog.slug} blog={blog} />;
            }
          })}
        </div>
      </AnimatedItem>
    </div>
  );
}
