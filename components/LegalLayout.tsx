export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-ink pb-14 pt-36 text-center">
        <div className="container-xl">
          <h1 className="text-4xl font-semibold text-paper md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-mist/50">
            Última actualización: {updated}
          </p>
        </div>
      </header>
      <section className="section bg-paper">
        <div className="container-xl max-w-3xl space-y-8 text-sm leading-relaxed text-ink/70">
          {children}
        </div>
      </section>
    </>
  );
}
