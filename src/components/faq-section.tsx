import { faqs } from "@/lib/faqs";

export function FaqSection() {
  return (
    <section id="faqs" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-1 transition open:border-slate-300 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none py-4 font-medium text-[var(--ink)] [-webkit-details-marker:hidden]">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="mt-1 inline-block text-[var(--muted)] transition group-open:rotate-180">
                    ▾
                  </span>
                </span>
              </summary>
              <p className="border-t border-[var(--border)] pb-4 pt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--muted-bg)] p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
            Still have a question?
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Haven&apos;t found what you&apos;re looking for? Contact our friendly
            support team — we answer calls.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-slate-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
