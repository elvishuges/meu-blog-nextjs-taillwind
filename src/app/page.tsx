import clsx from "clsx";

export default function Home() {
  return (
    <h1
      className={clsx(
        "text-6xl",
        "font-bold",
        "text-blue-500",
        "hover:text-blue-50",
        "hover:bg-blue-500"
      )}
    >
      Texto no meu H1
    </h1>
  );
}
