import Link from "next/link";
import type { Metadata } from "next";

const CYBERCYTE_URL = "https://www.cybercyte.com/";

export const metadata: Metadata = {
  title: "CyberCyte X-CTEM partnership — North America",
  description:
    "Evolvic is the North American partner for CyberCyte X-CTEM: unified exposure, risk, and GRC visibility backed by Evolvic cybersecurity and IT legal advisory for Canada and the United States.",
  openGraph: {
    title: "Evolvic × CyberCyte — Exposure management in North America",
    description:
      "Bring continuous threat exposure management and GRC alignment to your organization with Evolvic and CyberCyte.",
  },
};

export default function CybercytePartnerPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[var(--accent)]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="px-2 text-slate-400">/</span>
            <span className="text-[var(--muted)]">Partners</span>
            <span className="px-2 text-slate-400">/</span>
            <span className="text-[var(--muted)]">CyberCyte</span>
          </p>
          <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl">
            Evolvic and CyberCyte: exposure management for Canada and the United States
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
            Evolvic helps organizations adopt{" "}
            <strong className="font-medium text-[var(--ink)]">
              CyberCyte&apos;s X-CTEM platform
            </strong>{" "}
            — unified visibility across risk, threats, vulnerabilities, and GRC
            workflows — with the implementation discipline and legal context North
            American teams need to satisfy executives, customers, and regulators.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-14 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
              What CyberCyte delivers
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              CyberCyte focuses on{" "}
              <strong className="font-medium text-[var(--ink)]">
                continuous threat exposure management
              </strong>{" "}
              and integrated governance: consolidating attack-surface and
              security operations signals, prioritizing remediation, and aligning
              evidence with frameworks such as ISO 27001, NIST-oriented
              practices, and emerging operational resilience expectations.
            </p>
            <p className="mt-4">
              <a
                href={CYBERCYTE_URL}
                className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit CyberCyte.com for product detail
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
              What Evolvic adds in North America
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--muted)] marker:text-[var(--accent)]">
              <li>
                <strong className="font-medium text-[var(--ink)]">
                  Advisory and adoption:
                </strong>{" "}
                scoping CTEM and GRC processes to your stack, teams, and risk
                appetite—not a generic tool rollout.
              </li>
              <li>
                <strong className="font-medium text-[var(--ink)]">
                  Cybersecurity &amp; IT law:
                </strong>{" "}
                privacy, outsourcing, breach readiness, and documentation that
                supports audits and customer diligence.
              </li>
              <li>
                <strong className="font-medium text-[var(--ink)]">
                  Transformation context:
                </strong>{" "}
                alignment with cloud, data, and modernization programs so
                security controls stay tied to how the business actually runs.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
              Ideal fit
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Mid-market and enterprise teams that have outgrown spreadsheets
              and point tools for vulnerability and compliance tracking, and need
              a single operational picture—with Evolvic as the regional partner
              for launch, integration, and governance.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-8">
            <h2 className="font-heading text-xl font-semibold text-[var(--ink)]">
              Next step
            </h2>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              Ask for an introductory workshop on exposure management, X-CTEM,
              and how Evolvic supports rollout in Canada and the United States.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent-dark)]"
            >
              Contact Evolvic
            </Link>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Prefer to start with our broader cyber practice?{" "}
              <Link
                href="/services/cybersecurity-and-law"
                className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
              >
                Cybersecurity &amp; Law
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
