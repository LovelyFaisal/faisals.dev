import blogs from "@/.velite/blogs.json";
import ArticleCard from "./article-card";
import ArticleCard2 from "./article-card2";

export default function Category({
  category,
  currentSlug,
}: {
  category: string;
  currentSlug: string;
}) {
  const categoryBlogs = blogs.filter(
    (blog) => blog.category.slug === category && blog.slug !== currentSlug,
  );
  const newBlogs = blogs.filter(
    (blog) => blog.isPublished && blog.slug !== currentSlug,
  );
  return (
    <div className="divide-y divide-white/[0.03]">
      {newBlogs.map((blog) => {
        return <ArticleCard2 key={blog.slug} blog={blog} />;
      })}
    </div>
  );
}
