import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Evolvic — open roles and consulting opportunities.",
};

export default function CareersPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Careers
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)]">
          We&apos;re building a job board and application flow for Evolvic
          consulting placements. For now, see{" "}
          <Link href="/contact" className="font-medium text-[var(--accent)] hover:underline">
            Contact
          </Link>{" "}
          or email talent directly from that page.
        </p>
      </div>
    </section>
  );
}
