import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on cloud, cybersecurity, data, and digital transformation.",
};

export default function BlogPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Blog
        </h1>
        <p className="mt-6 text-[var(--muted)]">
          WordPress posts can be migrated here via a headless CMS, MDX, or a
          static import. This route is a placeholder until content is wired up.
        </p>
      </div>
    </section>
  );
}
