import { clsx } from "clsx";

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  content,
  contentTitle,
  pageTitle,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "flex items-center justify-center ",
          "bg-slate-900 min-h-[320px]",
          "mb-16",
          "p-8",
          "rounded-2xl",
          "text-amber-100 tex-",
        )}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              {contentTitle}
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Algo deu errado.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {content}
            </p>
            <a
              href="/"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
