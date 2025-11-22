import blogs from "@/.velite/blogs.json";
import { notFound } from "next/navigation";
import AnimatedItem from "@/components/animatedItem";
import Category from "@/components/morelayout";
import Link from "next/link";
import Heading from "@/components/heading";
import { IoCopyOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import CopyButton from "@/components/copyButton";
import { FaLinkedinIn } from "react-icons/fa";

import type { Metadata } from "next";

interface BlogProps {
  params: Promise<{ slug: string }>;
}

function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
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
          <div className="flex gap-12">
            <div
              className="prose
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
            <div className=" flex flex-col gap-2.5">
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
            </div>
          </div>
        </AnimatedItem>
        <div className="flex flex-col gap-6 pt-20 pb-16">
          <Link href="/blog">
            <Heading title="المزيد من المقالات" />
          </Link>
          <Category category={blog.category.slug} currentSlug={blog.slug} />
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}
