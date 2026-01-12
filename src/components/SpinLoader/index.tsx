import clsx from "clsx";

type SpringLoaderProps = {
  className?: string;
};
export function SpinLoader({ className }: SpringLoaderProps) {
  return (
    <div
      className={`bg-slate-500 flex justify-center text-center h-125 items-center ${className}`}
    >
      <div
        className={`w-10 h-10 border-5 border-t-transparent  border-slate-900 rounded-full animate-spin `}
      ></div>
    </div>
  );
}
