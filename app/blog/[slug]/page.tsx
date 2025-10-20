import blogs from "@/.velite/blogs.json";
import { notFound } from "next/navigation";
import AnimatedItem from "@/components/animatedItem";
import MDXContent from "@/components/MDXContent";
interface BlogProps {
  params: Promise<{ slug: string }>;
}

function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export default async function Page({ params }: BlogProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const publishedAt = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="container">
        <div className="pt-[120px] pb-[80px] flex flex-col">
          <div className="flex flex-col gap-3 pb-5 border-b border-[#1c1c1c]">
            <AnimatedItem delay={0}>
              <h1 className="text-3xl">{blog.title}</h1>
            </AnimatedItem>

            <div className="flex text-[13px] gap-2">
              <AnimatedItem delay={0.3}>
                <p>{blog.category.name}</p>
              </AnimatedItem>
              <AnimatedItem delay={0.2}>
                <p>{publishedAt}</p>
              </AnimatedItem>
            </div>
          </div>
        </div>

        <AnimatedItem delay={0.4}>
          <div
            className="
    prose
    prose-h1:text-3xl
    prose-h1:font-normal
    prose-h2:text-lg
    prose-h2:text-[#ededed]
    prose-p:text-[#ababab]
    prose-li:text-[#ababab]
    prose-ul:pl-0
    dark:prose-invert
    pt-4
    "
          >
            <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          </div>
        </AnimatedItem>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}
