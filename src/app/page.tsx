import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostFeutered } from "@/components/PostFeutered";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeutered />
      </Suspense>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostsList />
      </Suspense>
    </>
  );
}
