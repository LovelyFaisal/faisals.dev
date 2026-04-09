import { defineConfig, s } from "velite";
import rehypeShiki from '@shikijs/rehype'
import readingTime from "reading-time";
import rehypeMermaid from 'rehype-mermaid'

// Define the blog schema
const blog = s
  .object({
    title: s.string(),
    description: s.string().optional(),
    publishedAt: s.isodate(),
    isPublished: s.boolean().default(true),
    body: s.markdown(),
    image: s.image(),
    category: s.object({
      name: s.string(),
      slug: s.string()
    }),
    slug: s.string(),
  })
  .transform((data) => {
    return {
      ...data,
      url: `/blogs/${data.slug}`,
      readingTime: readingTime(data.body)
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
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeMermaid, {mermaidConfig: {theme: 'dark'}} // eslint-disable-line @typescript-eslint/no-explicit-any
      ],
        [
        rehypeShiki, // eslint-disable-line @typescript-eslint/no-explicit-any
        { theme: "github-dark-default" }
      ]
    ]
  }
  ,
  output: {
    //data: ".velite/generated",
    //assets: "public/blogs",
    // clean: true,
  },
});
