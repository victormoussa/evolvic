import Link from "next/link";
import { faqs } from "@/lib/faqs";

export function FaqSection() {
  return (
    <section id="faqs" className="scroll-mt-28 bg-[var(--evolvic-bg-soft)] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance font-heading text-2xl font-bold capitalize text-[var(--evolvic-navy)] sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group cursor-pointer rounded-2xl border border-[var(--evolvic-border)] bg-white px-5 py-1 transition-shadow duration-200 open:border-[var(--evolvic-border-light)] open:shadow-sm"
            >
              <summary className="list-none py-4 font-medium text-[var(--evolvic-navy)] [-webkit-details-marker:hidden]">
                <span className="flex cursor-pointer items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span
                    className="mt-1 inline-block text-[var(--evolvic-purple)] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  >
                    ▾
                  </span>
                </span>
              </summary>
              <p className="border-t border-[var(--evolvic-border)] pb-4 pt-3 text-sm font-light leading-relaxed text-[var(--evolvic-text)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-[var(--evolvic-border)] bg-white p-5 text-center shadow-sm sm:mt-14 sm:p-8">
          <h3 className="font-heading text-xl font-bold text-[var(--evolvic-navy)]">
            Still have question?
          </h3>
          <p className="mt-2 text-sm font-light text-[var(--evolvic-text)]">
            Haven&apos;t found what you&apos;re looking for? Contact our friendly
            support team - we answer calls.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-[var(--evolvic-purple)] bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wider text-[var(--evolvic-purple)] transition-colors duration-200 hover:bg-[var(--evolvic-purple)] hover:text-white sm:w-auto"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
