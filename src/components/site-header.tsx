"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

type DesktopMenu = "services" | "english" | null;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [mobileAccordion, setMobileAccordion] = useState<DesktopMenu>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!headerRef.current?.contains(e.target as Node)) {
        setDesktopMenu(null);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setMobileAccordion(null);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function desktopKeyForLabel(label: string): DesktopMenu {
    if (label === "Services") return "services";
    if (label === "English") return "english";
    return null;
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 min-w-0 border-b border-[var(--evolvic-border)] bg-white"
    >
      <div className="mx-auto grid max-w-[1420px] min-w-0 grid-cols-[auto_1fr_auto] items-center gap-2 px-4 py-3.5 sm:gap-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 cursor-pointer justify-self-start transition-opacity duration-200 hover:opacity-85"
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

        <nav
          className="hidden justify-self-center lg:col-start-2 lg:row-start-1 lg:flex"
          aria-label="Main"
        >
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {headerNav.map((item) =>
              item.type === "link" ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer px-2.5 py-2 text-[14px] font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:text-[var(--evolvic-purple)] xl:px-3 xl:text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center px-2.5 py-2 text-[14px] font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:text-[var(--evolvic-purple)] xl:px-3 xl:text-[15px]"
                    aria-expanded={
                      desktopMenu === desktopKeyForLabel(item.label)
                    }
                    aria-haspopup="true"
                    onClick={() => {
                      const k = desktopKeyForLabel(item.label);
                      if (!k) return;
                      setDesktopMenu((m) => (m === k ? null : k));
                    }}
                  >
                    {item.label}
                    <Chevron
                      open={desktopMenu === desktopKeyForLabel(item.label)}
                    />
                  </button>
                  {desktopMenu === desktopKeyForLabel(item.label) ? (
                    <div
                      className="absolute left-1/2 top-full z-50 mt-1 min-w-[13.5rem] -translate-x-1/2 rounded-xl border border-[var(--evolvic-border)] bg-white py-2 shadow-lg"
                      role="menu"
                    >
                      {item.items.map((sub) => (
                        <div key={sub.href + sub.label} role="none">
                          {sub.external ? (
                            <a
                              href={sub.href}
                              role="menuitem"
                              className="block px-4 py-2.5 text-left text-[14px] text-[var(--evolvic-text)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)] hover:text-[var(--evolvic-purple)]"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setDesktopMenu(null)}
                            >
                              {sub.label}
                            </a>
                          ) : (
                            <Link
                              href={sub.href}
                              role="menuitem"
                              className="block px-4 py-2.5 text-[14px] text-[var(--evolvic-text)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)] hover:text-[var(--evolvic-purple)]"
                              onClick={() => setDesktopMenu(null)}
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2 justify-self-end sm:gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden items-center gap-3 lg:flex"
          >
            <PhoneDisc />
            <span className="whitespace-nowrap text-[14px] font-medium text-[var(--evolvic-navy)] xl:text-[15px]">
              {site.phone}
            </span>
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md p-2 text-[var(--evolvic-purple)] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
            <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
            <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto border-t border-[var(--evolvic-border)] bg-white lg:hidden"
        >
          <div className="mx-auto max-w-[1420px] px-4 py-5 sm:px-8">
            <a
              href={`tel:${site.phoneTel}`}
              className="mb-5 flex items-center gap-3 border-b border-[var(--evolvic-border)] pb-5"
              onClick={() => setMobileOpen(false)}
            >
              <PhoneDisc />
              <span className="text-base font-medium text-[var(--evolvic-navy)]">
                {site.phone}
              </span>
            </a>
            <nav className="flex flex-col gap-0.5" aria-label="Main mobile">
              {headerNav.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="py-1">
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)]"
                      aria-expanded={
                        mobileAccordion === desktopKeyForLabel(item.label)
                      }
                      onClick={() => {
                        const k = desktopKeyForLabel(item.label);
                        if (!k) return;
                        setMobileAccordion((m) => (m === k ? null : k));
                      }}
                    >
                      {item.label}
                      <Chevron
                        open={mobileAccordion === desktopKeyForLabel(item.label)}
                      />
                    </button>
                    {mobileAccordion === desktopKeyForLabel(item.label) ? (
                      <ul className="mt-1 space-y-0.5 border-l-2 border-[var(--evolvic-purple)]/30 pl-4">
                        {item.items.map((sub) => (
                          <li key={sub.href + sub.label}>
                            {sub.external ? (
                              <a
                                href={sub.href}
                                className="block py-2.5 text-[15px] text-[var(--evolvic-text)] hover:text-[var(--evolvic-purple)]"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </a>
                            ) : (
                              <Link
                                href={sub.href}
                                className="block py-2.5 text-[15px] text-[var(--evolvic-text)] hover:text-[var(--evolvic-purple)]"
                                onClick={() => setMobileOpen(false)}
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
