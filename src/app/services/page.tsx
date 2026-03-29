import Link from "next/link";
import type { Metadata } from "next";
import { serviceSummaries } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cybersecurity & law, data-driven growth, product development, and cloud services.",
};

export default function ServicesIndexPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
          Services
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
          Secure, flexible end-to-end capabilities to help you modernize and
          grow with confidence.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {serviceSummaries.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition hover:border-teal-200 hover:shadow-md"
            >
              <h2 className="font-display text-2xl font-semibold text-[var(--ink)] group-hover:text-[var(--accent-dark)]">
                {s.title}
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                {s.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)]">
                View service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
