import Link from "next/link";

export function CtaConsultation() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
          Need to know more?
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          You have a project in mind and a budget for it
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--accent-dark)]"
        >
          Request a free consultation
        </Link>
      </div>
    </section>
  );
}
