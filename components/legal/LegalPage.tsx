type LegalPageProps = {
  title: string;
  summary: string;
};

export function LegalPage({ title, summary }: LegalPageProps) {
  return (
    <div className="bg-[#f5f8ff] text-[#212241]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-14 md:px-10">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-[#434a76]">{summary}</p>
        <section className="rounded-2xl border border-[#d4ddf2] bg-white p-6 shadow-sm">
          <p className="text-[#4b527d]">
            This policy applies to all software development services and digital
            solutions provided by Skyen Systems.
          </p>
        </section>
      </main>
    </div>
  );
}
