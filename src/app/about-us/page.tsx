import Link from "next/link";
import type { Metadata } from "next";
import { CtaConsultation } from "@/components/cta-consultation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Evolvic helps organizations move to the cloud since 2007 — business technology solutions and IT services from Montreal.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            Our mission is to make work meaningful
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            We&apos;re a company dedicated to helping organizations move to the
            cloud to become more agile, connected and efficient.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
              Who we are
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Driven by the mission of guiding clients to succeed through
              innovative business cloud solutions, Evolvic has been a leading
              provider of business technology solutions and IT services to
              growth companies in Montreal since 2007.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
              Our vision
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              We are a consultancy firm that supports companies and organizations
              in digital transformation. With a unique combination of
              competence in IT, design, communication, and management, we develop
              innovative and sustainable solutions that contribute high business
              value for our clients.
            </p>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Our vision is to create a sustainable and humane society through
              digitalization and innovation.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)]/50 p-8">
            <h2 className="font-display text-xl font-semibold text-[var(--ink)]">
              From the blog
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Featured articles from the original site (ethics of data
              collection, AI and privacy, data responsibility) will live on{" "}
              <Link href="/blog" className="font-medium text-[var(--accent)] hover:underline">
                /blog
              </Link>{" "}
              once posts are migrated.
            </p>
          </div>
        </div>
      </section>

      <CtaConsultation />
    </>
  );
}
