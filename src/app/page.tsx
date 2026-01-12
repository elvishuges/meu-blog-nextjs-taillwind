import { Header } from "@/components/Header";
import PostList from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  const posts = await postRepository.findAll();
  return (
    <div>
      <header className=" text-6xl text-center py-2">Aqui é o header</header>
      <Suspense fallback={<SpinLoader />}>
        <PostList></PostList>
      </Suspense>
      <footer className="text-center py-2">Footer</footer>
    </div>
  );
}
