"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { headerNav, site } from "@/lib/site";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        d="M2.5 4.25 6 7.75 9.5 4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneDisc() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--evolvic-navy)] text-white"
      aria-hidden
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </span>
  );
}

type PanelAccordion = "services" | "english" | null;

function dropdownKey(label: string): PanelAccordion {
  if (label === "Services") return "services";
  if (label === "English") return "english";
  return null;
}

/** Matches evolvic.com: logo + menu control only; full nav lives in the slide-down panel. */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordion, setAccordion] = useState<PanelAccordion>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setAccordion(null);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 min-w-0 border-b border-[var(--evolvic-border)] bg-white">
      <div className="mx-auto flex max-w-[1420px] min-w-0 items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-85"
        >
          <Image
            src="/evolvic-logo.svg"
            alt="Evolvic"
            width={158}
            height={45}
            className="h-8 w-auto sm:h-9 md:h-[45px]"
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md p-2 text-[var(--evolvic-purple)]"
          aria-expanded={menuOpen}
          aria-controls="site-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
          <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
          <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
        </button>
      </div>

      {menuOpen ? (
        <div
          id="site-nav-panel"
          className="max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto border-t border-[var(--evolvic-border)] bg-white"
        >
          <div className="mx-auto max-w-[1420px] px-4 py-5 sm:px-8">
            <a
              href={`tel:${site.phoneTel}`}
              className="mb-5 flex items-center gap-3 border-b border-[var(--evolvic-border)] pb-5"
              onClick={() => setMenuOpen(false)}
            >
              <PhoneDisc />
              <span className="text-base font-medium text-[var(--evolvic-navy)]">
                {site.phone}
              </span>
            </a>
            <nav className="flex flex-col gap-0.5" aria-label="Main">
              {headerNav.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="py-1">
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)]"
                      aria-expanded={accordion === dropdownKey(item.label)}
                      onClick={() => {
                        const k = dropdownKey(item.label);
                        if (!k) return;
                        setAccordion((m) => (m === k ? null : k));
                      }}
                    >
                      {item.label}
                      <Chevron open={accordion === dropdownKey(item.label)} />
                    </button>
                    {accordion === dropdownKey(item.label) ? (
                      <ul className="mt-1 space-y-0.5 border-l-2 border-[var(--evolvic-purple)]/30 pl-4">
                        {item.items.map((sub) => (
                          <li key={sub.href + sub.label}>
                            {sub.external ? (
                              <a
                                href={sub.href}
                                className="block py-2.5 text-[15px] text-[var(--evolvic-text)] hover:text-[var(--evolvic-purple)]"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link
                                href={sub.href}
                                className="block py-2.5 text-[15px] text-[var(--evolvic-text)] hover:text-[var(--evolvic-purple)]"
                                onClick={() => setMenuOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ),
              )}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
