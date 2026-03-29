export function Newsletter() {
  return (
    <div className="rounded-2xl border border-[var(--evolvic-border)] bg-white p-6 sm:p-8">
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-[var(--evolvic-navy)]">
        Newsletter
      </h3>
      <p className="mt-2 max-w-xl text-sm font-light text-[var(--evolvic-text)]">
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
          className="min-h-12 flex-1 cursor-text rounded-lg border border-[var(--evolvic-border)] bg-white px-4 text-sm text-[var(--evolvic-navy)] outline-none transition-shadow duration-200 placeholder:text-[#888] focus:ring-2 focus:ring-[var(--evolvic-purple-soft)]/40"
        />
        <button
          type="submit"
          className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg bg-[var(--evolvic-purple)] px-6 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[var(--evolvic-purple-hover)]"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-[var(--evolvic-text)]/70">
        Connect your email provider or form service to enable submissions.
      </p>
    </div>
  );
}
