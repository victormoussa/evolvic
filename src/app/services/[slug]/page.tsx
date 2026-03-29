import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaConsultation } from "@/components/cta-consultation";
import {
  getAllServiceSlugs,
  serviceDetails,
  type ServiceSlug,
} from "@/lib/services-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceDetails[slug as ServiceSlug];
  if (!s) return { title: "Service" };
  return {
    title: s.title,
    description: s.intro,
  };
}

function SectionBody({
  body,
  variant,
}: {
  body: string | string[];
  variant?: "list" | "prose" | "bullets";
}) {
  if (variant === "bullets" && Array.isArray(body)) {
    return (
      <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--muted)] marker:text-[var(--accent)]">
        {body.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (variant === "list" && Array.isArray(body)) {
    const [first, ...rest] = body;
    return (
      <div className="mt-4 space-y-4">
        {first ? (
          <p className="text-[var(--muted)] leading-relaxed">{first}</p>
        ) : null}
        {rest.length > 0 ? (
          <ul className="list-inside list-disc space-y-2 text-[var(--muted)] marker:text-[var(--accent)]">
            {rest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
  if (Array.isArray(body)) {
    return (
      <div className="mt-4 space-y-4">
        {body.map((p) => (
          <p key={p} className="text-[var(--muted)] leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    );
  }
  return (
    <p className="mt-4 whitespace-pre-line text-[var(--muted)] leading-relaxed">
      {body}
    </p>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = serviceDetails[slug as ServiceSlug];
  if (!s) notFound();

  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[var(--accent)]">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="px-2 text-slate-400">/</span>
            <span className="text-[var(--muted)]">{s.title}</span>
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            {s.title}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
            {s.intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-16 px-4 sm:px-6 lg:px-8">
          {s.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
                {sec.heading}
              </h2>
              <SectionBody body={sec.body} variant={sec.variant} />
            </div>
          ))}
        </div>
      </section>

      <CtaConsultation />
    </>
  );
}
