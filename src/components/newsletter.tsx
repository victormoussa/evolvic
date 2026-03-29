export function Newsletter() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
        Newsletter
      </h3>
      <p className="mt-2 max-w-xl text-sm text-[var(--muted)]">
        Sign up for the latest deals, product news, and more from Evolvic Inc.
      </p>
      <form
        className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        action="#"
        method="post"
      >
        <label className="sr-only" htmlFor="footer-email">
          Email
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Work email"
          className="min-h-11 flex-1 rounded-full border border-[var(--border)] bg-white px-4 text-sm text-[var(--ink)] outline-none ring-[var(--accent)]/40 placeholder:text-slate-400 focus:ring-2"
        />
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--header)] px-6 text-sm font-semibold text-white transition hover:bg-[#151d33]"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-slate-500">
        Connect your email provider or form backend (e.g. Resend, Formspree) to
        enable submissions.
      </p>
    </div>
  );
}
