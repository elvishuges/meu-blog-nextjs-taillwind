import { Header } from "@/components/Header";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import clsx from "clsx";

export default async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>post.id</p>;
      })}
    </div>
  );
}
