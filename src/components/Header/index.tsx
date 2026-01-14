"use-client";
import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <h1
      className={clsx(
        "text-4xl/normal font-extrabold py-2",
        "sm:text-5xl/normal ",
        "md:text-6xl/normal ",
        "lg:text-7xl/normal "
      )}
    >
      <Link href="#">the Blog</Link>
    </h1>
  );
}
