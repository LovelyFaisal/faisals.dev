import blogs from "@/.velite/blogs.json";
import { notFound } from "next/navigation";
import AnimatedItem from "@/components/animatedItem";
import Category from "@/components/morelayout";
import Link from "next/link";
import Heading from "@/components/heading";
import { FaXTwitter } from "react-icons/fa6";
import CopyButton from "@/components/copyButton";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import type { Metadata } from "next";
export const dynamicParams = false;
interface BlogProps {
  params: Promise<{ slug: string }>;
}

function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug && blog.isPublished);
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return {};
  }

  return {
    title: `${blog.title} - فيصل الحربي`,
  };
}

export default async function Page({ params }: BlogProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  // const siteUrl = `https://localhost:3000/blog/${blog?.slug}`;
  // const shareLink = `https://x.com/intent/post?url=${encodedUrl}&text=${encodedText}`;
  if (!blog) {
    notFound();
  }

  const publishedAt = new Date(blog.publishedAt).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="container">
        <div className="py-10 flex flex-col">
          <div className="flex flex-col pb-6 border-b border-white/5">
            <AnimatedItem delay={0}>
              <Link
                href="/blog"
                className="flex items-center mb-6 gap-1 hover:opacity-75 transition-opacity group text-primary text-sm"
              >
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
                العودة إلى المقالات
              </Link>
            </AnimatedItem>

            <div className="flex items-center gap-4 mb-4 text-[13.3px] text-[#94A3B8]">
              <AnimatedItem delay={0.1}>
                <span className="w-fit bg-[#131316] border border-white/10 px-2 py-1 rounded text-primary font-medium">
                  {blog.category.name}
                </span>
              </AnimatedItem>
              <AnimatedItem delay={0.2}>
                <div className="flex gap-1 items-center">
                  <CiCalendar size={16} />
                  <span>{publishedAt}</span>
                </div>
              </AnimatedItem>

              <AnimatedItem delay={0.3}>
                <div className="flex gap-1 items-center">
                  <MdAccessTime />
                  <span>
                    {blog.readingTime.text
                      .replace("min read", "دقائق قراءة")
                      .replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)])}
                  </span>
                </div>
              </AnimatedItem>
            </div>

            <AnimatedItem delay={0}>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {blog.title}
              </h1>
            </AnimatedItem>
            <p className="text-[#94A3B8] ">
              نظرة شاملة على التطورات الأخيرة في لغة CSS وكيف بدأت الميزات
              الجديدة تنافس أطر العمل التقليدية وتغير طريقة تفكيرنا فيsسس
              التصميم.
            </p>
          </div>
        </div>

        <AnimatedItem delay={0.4}>
          <div className="flex gap-12">
            <div
              className="prose
    prose-h1:text-3xl
    prose-h1:font-normal
    prose-h2:text-[32px]
    max-w-none
    prose-h2:text-white
    prose-h2:mb-4
    prose-p:text-slate-300
    prose-li:text-slate-300
    prose-ul:pl-0
    pb-5
    dark:prose-invert
    "
            >
              <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
            </div>
            {/* <div className=" flex flex-col gap-2.5">
              <CopyButton />
              <Link
                href="test"
                target="_blank"
                rel="noreferrer"
                className="bg-[#171717] hover:bg-[#212121] transition-colors w-[32px] h-[32px] flex items-center justify-center rounded-lg"
              >
                <FaXTwitter size={16} />
              </Link>
              <Link
                href="test"
                target="_blank"
                rel="noreferrer"
                className="bg-[#171717] hover:bg-[#212121] transition-colors w-[32px] h-[32px] flex items-center justify-center rounded-lg"
              >
                <FaLinkedinIn size={16} />
              </Link>
            </div> */}
          </div>
        </AnimatedItem>
        <div className="flex flex-col gap-6 border-t border-white/5 pt-20 pb-16">
          <Link href="/blog">
            <Heading title="المزيد من المقالات" />
            {/* <h2 className="font-bold text-2xl">المزيد من ال</h2> */}
          </Link>
          <Category category={blog.category.slug} currentSlug={blog.slug} />
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  // return blogs
  //   .filter((blog) => blog.isPublished)
  //   .map((blog) => ({ slug: blog.slug }));

  return (
    blogs
      // .filter((blog) => blog.isPublished)
      .map((blog) => ({ slug: blog.slug }))
  );
}
