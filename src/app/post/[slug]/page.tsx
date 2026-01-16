import { findByPostSlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  let post;
  try {
    post = await findByPostSlugCached(slug);
  } catch {
    post = undefined;
  }

  if (!post) notFound();

  return <h1>Rona Dinamica {post?.author} </h1>;
}
