import { findByPostSlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import PostDate from "../PostDate";
import SafeMarkdown from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};
export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findByPostSlugCached(slug);
  return (
    <div>
      <article className="mb-16">
        <header className="group flex flex-col gap-4">
          <Image
            className="rounded-2xl"
            src={post.coverImageUrl}
            alt={post.title}
            width={1200}
            height={720}
          />
          <PostHeading url={`/post/${post.slug}`} as="h2">
            {post.title}
          </PostHeading>
          <p>
            {post.author} | <PostDate date={post.createdAt} />
          </p>
          <p className="text-xl">{post.excerpt}</p>
          <SafeMarkdown markdown={post.content} />
        </header>
      </article>
    </div>
  );
}
