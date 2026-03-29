"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 min-w-0 border-b border-[var(--evolvic-border)] bg-white">
      <div className="mx-auto flex max-w-[1420px] min-w-0 items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
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
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
          <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
          <span className="block h-0.5 w-6 rounded-full bg-current transition-transform duration-200" />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--evolvic-border)] bg-white px-4 py-6 sm:px-8"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--evolvic-purple)]">
            <a
              href={`tel:${site.phoneTel}`}
              className="cursor-pointer hover:underline"
            >
              {site.phone}
            </a>
          </p>
          <nav className="mx-auto flex max-w-[1420px] flex-col gap-1" aria-label="Main">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-[var(--evolvic-navy)] transition-colors duration-200 hover:bg-[var(--evolvic-bg-soft)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
