import blogs from "@/.velite/blogs.json";
import ArticleCard from "./articleCard";

export default function Category({
  category,
  currentSlug,
}: {
  category: string;
  currentSlug: string;
}) {
  const categoryBlogs = blogs.filter(
    (blog) => blog.category.slug === category && blog.slug !== currentSlug
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {categoryBlogs.map((blog) => {
        return <ArticleCard key={blog.slug} blog={blog} />;
      })}
    </div>
  );
}
