import Link from "next/link";
import { footer, site } from "@/lib/site";
import { Newsletter } from "@/components/newsletter";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--evolvic-border)] bg-[var(--evolvic-bg-soft)]">
      <div className="mx-auto max-w-[1420px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 border-b border-[var(--evolvic-border)] pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-heading text-sm font-bold tracking-wider text-[var(--evolvic-navy)]">
              Follow us
            </p>
            <div className="mt-3 flex gap-4 text-sm">
              <a
                href={site.social.twitter}
                className="cursor-pointer text-[var(--evolvic-text)] underline-offset-4 transition-colors duration-200 hover:text-[var(--evolvic-purple)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={site.social.linkedin}
                className="cursor-pointer text-[var(--evolvic-text)] underline-offset-4 transition-colors duration-200 hover:text-[var(--evolvic-purple)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-xs font-bold tracking-wider text-[var(--evolvic-navy)]">
              USEFUL LINKS
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.useful.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-[var(--evolvic-text)] transition-colors duration-200 hover:text-[var(--evolvic-purple)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-xs font-bold tracking-wider text-[var(--evolvic-navy)]">
              SERVICES
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-[var(--evolvic-text)] transition-colors duration-200 hover:text-[var(--evolvic-purple)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-xs font-bold tracking-wider text-[var(--evolvic-navy)]">
              SUPPORT
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.support.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-[var(--evolvic-text)] transition-colors duration-200 hover:text-[var(--evolvic-purple)]"
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

        <p className="mt-12 text-center font-heading text-xs font-bold uppercase tracking-widest text-[var(--evolvic-text)]">
          Copyright © {site.copyrightYear} — {site.name} Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
