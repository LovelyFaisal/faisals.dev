import pages from "@/.velite/pages.json";
import AnimatedItem from "@/components/animated-item";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) {
    return <h1>Page not found</h1>;
  }
  return (
    <div className="container">
      <AnimatedItem delay={0}>
        <div
          className="prose
    prose-h1:text-3xl
    prose-h1:font-normal
    prose-h2:text-[32px]
    max-w-none
    prose-h2:text-white
    prose-a:text-primary
    prose-h2:mb-4
    prose-p:text-slate-300
    prose-p:m-0
    prose-p:text-lg
    prose-li:text-slate-300
    prose-ul:pl-0
    pb-5
    dark:prose-invert
    "
        >
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
        </div>
      </AnimatedItem>
    </div>
  );
}
