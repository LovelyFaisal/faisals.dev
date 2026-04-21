import { defineConfig, s } from "velite";
import rehypeShiki from "@shikijs/rehype";
import readingTime from "reading-time";





const page = s
  .object({
    body: s.markdown(),
    slug: s.slug('pages'),
  })
  .transform((data) => ({
    ...data,
    url: `/${data.slug}`,
  }));





// Define the blog schema
const blog = s
  .object({
    title: s.string(),
    description: s.string().optional(),
    publishedAt: s.isodate(),
    isPublished: s.boolean().default(true),
    ltr: s.boolean().default(false),
    body: s.markdown(),
    image: s.image(),
    category: s.object({
      name: s.string(),
      slug: s.string(),
    }),
    slug: s.string(),
  })
  .transform((data) => {
    return {
      ...data,
      url: `/blogs/${data.slug}`,
      readingTime: readingTime(data.body),
      //   toc: headings,
    };
  });

export default defineConfig({
  root: "content",
  collections: {
    blogs: {
      name: "Blog",
      pattern: "blogs/**/*.md",
      schema: blog,
    },
    pages: {
      name: "Pages",
      pattern: "pages/**/*.md",
      schema: page,
    }
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeShiki, // eslint-disable-line @typescript-eslint/no-explicit-any
        { theme: "github-dark-default" },
      ],
    ],
  },
  output: {
    //data: ".velite/generated",
    //assets: "public/blogs",
    // clean: true,
  },
});
