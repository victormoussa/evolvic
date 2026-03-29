import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { serviceSummaries } from "@/lib/services-data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef8f6] via-[var(--background)] to-[var(--background)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(13,148,136,0.18),_transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-dark)]">
            Cloud & digital transformation
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Companies that undergo digital transformation improve profitability
            &amp; efficiency.
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-lg text-[var(--muted)] sm:text-xl">
            <p>
              <strong className="font-semibold text-[var(--ink)]">
                80% of organizations
              </strong>{" "}
              that have completed digital transformation report increased
              profits.
            </p>
            <p>
              <strong className="font-semibold text-[var(--ink)]">
                85% say they have increased
              </strong>{" "}
              their market share.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--accent-dark)]"
          >
            Stay innovative
          </Link>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)]">
            We are dedicated to helping organizations move to the cloud to
            become more agile, connected, and efficient through our secure and
            flexible end-to-end services.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSummaries.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {s.description}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 group-hover:underline"
                >
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Cloud Computing Statistics
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-medium text-[var(--ink)]">
            By 2025, there will be over 100 zettabytes of data stored in the
            cloud. A zettabyte is a billion terabytes!
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {[
              "90% of companies use some type of cloud service.",
              "77% of enterprises have at least one application or a portion of it in the cloud.",
              "60% of organizations use cloud technology to store confidential data.",
              "73% of IT in insurance is based on hybrid clouds.",
            ].map((t) => (
              <li
                key={t}
                className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted-bg)]/60 px-4 py-3 text-sm text-[var(--muted)]"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { label: "Years of Experience", value: "1" },
              { label: "Major Projects", value: "0 +" },
              { label: "Countries Served", value: "0" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-6 py-8 text-center"
              >
                <p className="font-display text-4xl font-semibold text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                We provide you with reliable digital transformation solutions.
              </h2>
              <p className="mt-6 text-lg text-[var(--muted)]">
                Whether you need to transform your business, make an impact on
                society, or create unseen opportunities – we have the right
                people, the knowledge, and partners to achieve your vision.
              </p>
              <Link
                href="/about-us"
                className="mt-8 inline-flex rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-slate-300"
              >
                Read more
              </Link>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-teal-50 to-white p-10 shadow-sm">
              <p className="font-display text-lg text-[var(--ink)]">
                From strategy to implementation, Evolvic aligns technology,
                governance, and people so change actually sticks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#f4f6fb] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            How does it work?
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01.",
                title: "Design",
                body: "We design and develop custom web or traditional solutions for our clients in order to translate their vision into success. We’ve helped many companies transform their business, reduce costs, streamline processes and more.",
              },
              {
                step: "02.",
                title: "Integrate",
                body: "From strategy and design to system integration, Evolvic provides clients with opportunities to increase their return on investment, enhance productivity and maximize the value of their relationships with customers, employees, and partners.",
              },
              {
                step: "03.",
                title: "Support",
                body: "We introduce revolutionary new services with cloud computing. From initial strategy to moving entire data centers to the cloud – we have the expertise and the track record to ensure a smooth, low-risk transition.",
              },
            ].map((item) => (
              <div key={item.step} className="relative pl-4">
                <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {item.step}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
            Our technology &amp; business partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--muted)]">
            Partner logos from the current site can be exported and dropped in
            here as SVG or PNG for visual parity.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {["Cloud", "Data", "Security", "Product"].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-dashed border-[var(--border)] bg-white px-8 py-6 text-sm font-medium text-slate-400"
              >
                {label} partner
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
