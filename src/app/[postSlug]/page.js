import React from "react";
import BlogHero from "@/components/BlogHero";
import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";

async function BlogPost({ params }) {
  const content = await loadBlogPost(params.postSlug);

  console.log(content);
  return (
    <article className={styles.wrapper}>
      <BlogHero title={content.frontmatter.title} publishedOn={content.frontmatter.publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content.content} />
      </div>
    </article>
  );
}

export default BlogPost;
