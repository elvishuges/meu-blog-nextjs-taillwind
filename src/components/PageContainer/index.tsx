type PageContainerProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export function PageContainer({ sidebar, children }: PageContainerProps) {
  return (
    <div className="min-h-screen text-slate-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6">
          <aside className="p-4">{sidebar}</aside>
          <main className=" p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
