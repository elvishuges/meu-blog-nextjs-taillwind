import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostFeutered() {
  const posts = await findAllPublicPostsCached();
  const firstPost = posts[0];
  const postLink = firstPost.slug;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: `post/${postLink}`,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />

      <PostSummary
        postLink={firstPost.coverImageUrl}
        postHeading="h1"
        createdAt={firstPost.createdAt}
        excerpt={firstPost.excerpt}
        title={firstPost.title}
      />
    </section>
  );
}
