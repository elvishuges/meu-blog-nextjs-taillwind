import { findByPostSlugCached } from "@/lib/post/queries";

type SinglePostProps = {
  slug: string;
};
export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findByPostSlugCached(slug);
  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
