import Link from "next/link";

export function CtaConsultation() {
  return (
    <section className="border-y border-[var(--evolvic-border)] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold capitalize tracking-tight text-[var(--evolvic-navy)] sm:text-3xl">
          Need to know more?
        </h2>
        <p className="mt-3 text-[var(--evolvic-text)]">
          You have a project in mind and a budget for it
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[var(--evolvic-purple)] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-colors duration-200 hover:bg-[var(--evolvic-purple-hover)]"
        >
          Request a free consultation
        </Link>
      </div>
    </section>
  );
}
