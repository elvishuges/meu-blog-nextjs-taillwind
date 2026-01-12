"use-client";
import clsx from "clsx";
import { SpinLoader } from "../SpinLoader";

export function Header() {
  console.log("Header");
  return (
    <div>
      <SpinLoader className="min-h-[100px] bg-amber-500" />
    </div>
  );
}
