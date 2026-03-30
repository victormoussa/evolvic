import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { serviceSummaries } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Secure digital transformation, cloud, data & cyber",
  description:
    "Modernize with Evolvic: cybersecurity and IT law, cloud and data platforms, agile product delivery, and North American programs with CyberCyte X-CTEM for unified exposure and GRC visibility.",
  openGraph: {
    title: "Evolvic — digital transformation with security built in",
    description:
      "Consulting and delivery for Canada and the United States: cyber, legal, cloud, data, and strategic vendor partnerships.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-w-0 overflow-hidden bg-white">
        <div className="relative mx-auto max-w-[1420px] px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 md:px-8 md:pt-14 lg:pb-16 lg:pt-12">
          <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-14">
            <div className="min-w-0 lg:pr-2 xl:pr-4">
              <h1 className="max-w-xl text-balance font-heading text-[clamp(1.625rem,calc(4vw + 0.5rem),3.5rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[var(--evolvic-navy)] lg:max-w-none lg:text-[clamp(1.85rem,calc(2.2vw + 1.35rem),3.65rem)] xl:text-[clamp(2rem,calc(2vw + 1.5rem),4.1rem)]">
                Companies that undergo digital transformation improve{" "}
                <span className="text-[var(--evolvic-gold)]">
                  profitability &amp; efficiency.
                </span>
              </h1>

              <ul className="mt-6 max-w-xl list-outside list-disc space-y-2 pl-5 font-sans text-[14px] font-normal not-italic leading-relaxed tracking-[-0.5px] text-[var(--evolvic-navy)] marker:text-[var(--evolvic-navy)] sm:mt-7 sm:text-[15px] sm:leading-[1.75]">
                <li>
                  80% of organization that have completed digital
                  transformation report increased profits.
                </li>
                <li>85% say they have increased their market share.</li>
              </ul>

              <p className="mt-5 max-w-xl text-[15px] font-normal leading-relaxed text-[var(--evolvic-text)] sm:mt-6">
                From Montreal across North America, we align{" "}
                <strong className="font-semibold text-[var(--evolvic-navy)]">
                  cloud, data, and product delivery
                </strong>{" "}
                with{" "}
                <strong className="font-semibold text-[var(--evolvic-navy)]">
                  cybersecurity and IT law
                </strong>
                —so modernization holds up to customer due diligence, audits,
                and real-world incidents.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-[var(--evolvic-purple)] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[var(--evolvic-purple-hover)] sm:mt-9 sm:w-auto sm:px-10 sm:py-4 sm:tracking-[0.18em]"
              >
                Stay innovative
              </Link>
            </div>

            <div className="relative flex min-w-0 justify-center lg:justify-end">
              <div className="relative w-full max-w-[min(100%,28rem)] lg:max-w-none lg:w-full">
                <Image
                  src="/images/evolvic-home-hero.png"
                  alt="Stylized wireframe hand supporting a digital globe—representing secure global digital transformation"
                  width={960}
                  height={1024}
                  sizes="(max-width: 1023px) 100vw, (max-width: 1420px) 48vw, 600px"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-4xl text-balance font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold capitalize leading-tight text-[var(--evolvic-navy)]">
            Our Services
          </h2>
          <p className="mt-6 max-w-3xl font-sans text-[15px] font-light leading-[2] text-[var(--evolvic-text)]">
            Four practices—cybersecurity and IT law, data-driven growth, product
            delivery, and cloud—so you can modernize with confidence. Explore each
            area or ask us to map them to your priorities in Canada or the United
            States.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSummaries.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col rounded-2xl border border-[var(--evolvic-border)] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--evolvic-purple-soft)]/40 hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-bold text-[var(--evolvic-navy)]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-[var(--evolvic-text)]">
                  {s.description}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex cursor-pointer text-sm font-semibold text-[var(--evolvic-purple)] underline-offset-4 transition-colors duration-200 group-hover:underline"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-[var(--evolvic-border)] bg-[var(--evolvic-bg-soft)] p-6 sm:mt-14 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="min-w-0">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--evolvic-purple)]">
                Strategic partner
              </p>
              <h3 className="mt-2 font-heading text-lg font-bold text-[var(--evolvic-navy)] sm:text-xl">
                CyberCyte X-CTEM in North America
              </h3>
              <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-[var(--evolvic-text)]">
                Unified exposure and GRC visibility with Evolvic implementation
                and legal context for teams adopting continuous threat exposure
                management across Canada and the United States.
              </p>
            </div>
            <Link
              href="/partners/cybercyte"
              className="mt-5 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border-2 border-[var(--evolvic-purple)] bg-white px-5 py-3 text-sm font-semibold text-[var(--evolvic-purple)] transition-colors duration-200 hover:bg-[var(--evolvic-purple)] hover:text-white sm:mt-0"
            >
              Learn more
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-y border-[var(--evolvic-border)] bg-[var(--evolvic-bg-soft)] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-balance font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold capitalize text-[var(--evolvic-navy)]">
                Cloud Computing Statistics
              </h2>
              <p className="mt-6 font-heading text-lg font-semibold text-[var(--evolvic-navy)]">
                By 2025, there will be over 100 zettabytes of data stored in the
                cloud. A zettabyte is a billion terabytes!
              </p>
              <ul className="mt-8 space-y-4 font-sans text-[15px] font-light leading-relaxed text-[var(--evolvic-text)]">
                {[
                  "90% of companies use some type of cloud service.",
                  "77% of enterprises have at least one application or a portion of it in the cloud.",
                  "60% of organizations use cloud technology to store confidential data.",
                  "73% of IT in insurance is based on hybrid clouds.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--evolvic-purple)]"
                      aria-hidden
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-8">
                {[
                  { label: "Years of Experience", value: "1" },
                  { label: "Major Projects", value: "0 +" },
                  { label: "Countries Served", value: "0" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--evolvic-border)] bg-white px-4 py-6 text-center shadow-sm sm:px-6 sm:py-8"
                  >
                    <p className="font-heading text-3xl font-bold text-[var(--evolvic-purple)] sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--evolvic-text)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-w-0 justify-center lg:justify-end">
              <Image
                src="/images/cloud-computing-stats-lady.svg"
                alt=""
                width={400}
                height={400}
                sizes="(max-width: 1024px) 80vw, 400px"
                className="h-auto max-h-[280px] w-full max-w-[min(100%,20rem)] object-contain sm:max-h-[360px] lg:max-h-[420px] lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0">
              <h2 className="text-balance font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold capitalize text-[var(--evolvic-navy)]">
                We provide you with reliable digital transformation solutions.
              </h2>
              <p className="mt-6 font-sans text-[15px] font-light leading-[2] text-[var(--evolvic-text)]">
                Whether you need to transform your business, make an impact on
                society, or create unseen opportunities – we have the right
                people, the knowledge, and partners to achieve your vision.
              </p>
              <Link
                href="/about-us"
                className="mt-8 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg border border-[var(--evolvic-border)] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--evolvic-navy)] transition-colors duration-200 hover:border-[var(--evolvic-purple)] hover:text-[var(--evolvic-purple)] sm:w-auto"
              >
                READ MORE
              </Link>
            </div>
            <div className="min-w-0 rounded-2xl border border-[var(--evolvic-border)] bg-[var(--evolvic-bg-soft)] p-6 sm:p-10">
              <p className="font-heading text-lg font-semibold text-[var(--evolvic-navy)]">
                From strategy to implementation, Evolvic aligns technology,
                governance, and people so change actually sticks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--evolvic-border)] bg-[var(--evolvic-bg-soft)] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold capitalize text-[var(--evolvic-navy)]">
            How Does It Work?
          </h2>
          <div className="mt-10 grid min-w-0 gap-10 sm:mt-14 md:grid-cols-3">
            {[
              {
                step: "01.",
                title: "Design",
                body: "We design and develop custom Web or traditional solutions for our clients in order to translate their vision into success. We've helped many companies transform their business, reduce costs, streamline processes and",
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
              <div key={item.step} className="relative min-w-0 pl-5">
                <div className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-[var(--evolvic-purple)] to-transparent" />
                <p className="font-heading text-lg font-bold text-[var(--evolvic-purple)]">
                  {item.step}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold capitalize text-[var(--evolvic-navy)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[var(--evolvic-text)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-center font-heading text-xl font-bold capitalize text-[var(--evolvic-navy)] sm:text-2xl md:text-3xl">
            Our Technology &amp; Business Partners
          </h2>
          <div className="mt-10 grid grid-cols-2 place-items-center gap-x-6 gap-y-10 sm:mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-12">
            {[1, 2, 3, 4].map((n) => (
              <Image
                key={n}
                src={`/images/partners/logo${n}.jpg`}
                alt=""
                width={100}
                height={80}
                sizes="(max-width: 640px) 42vw, 100px"
                className="h-10 w-auto max-w-full object-contain opacity-90 grayscale transition-opacity duration-200 hover:opacity-100 hover:grayscale-0 sm:h-12"
              />
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
