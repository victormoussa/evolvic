import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Evolvic Inc.",
};

export default function LegalPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Paste the legal copy from your current WordPress site or have counsel
          provide an updated document. This page is a structural placeholder for
          the Next.js migration.
        </p>
      </div>
    </section>
  );
}
