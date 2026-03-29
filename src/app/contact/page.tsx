import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Evolvic — phone, email, and talent inquiries.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Got a question? Want to learn more about us? Get in touch.
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Phone
            </dt>
            <dd className="mt-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="text-lg font-medium text-[var(--accent)] hover:underline"
              >
                {site.phone}
              </a>
            </dd>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Talent
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.emails.talent}`}
                className="break-all text-[var(--ink)] hover:text-[var(--accent)] hover:underline"
              >
                {site.emails.talent}
              </a>
            </dd>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Email
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.emails.general}`}
                className="break-all text-[var(--ink)] hover:text-[var(--accent)] hover:underline"
              >
                {site.emails.general}
              </a>
            </dd>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Support
            </dt>
            <dd className="mt-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="text-lg font-medium text-[var(--accent)] hover:underline"
              >
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
