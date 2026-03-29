import Link from "next/link";
import { footer, site } from "@/lib/site";
import { Newsletter } from "@/components/newsletter";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#f4f6fb]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 border-b border-[var(--border)] pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">Follow us</p>
            <div className="mt-3 flex gap-4 text-sm">
              <a
                href={site.social.twitter}
                className="text-[var(--muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={site.social.linkedin}
                className="text-[var(--muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Useful links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.useful.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--muted)] transition hover:text-[var(--ink)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--muted)] transition hover:text-[var(--ink)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Support
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.support.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--muted)] transition hover:text-[var(--ink)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-4">
            <Newsletter />
          </div>
        </div>

        <p className="mt-12 text-center text-xs uppercase tracking-widest text-slate-500">
          Copyright © {site.copyrightYear} — {site.name} Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
