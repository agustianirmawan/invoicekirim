"use client";

import { useState } from "react";

const menu = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Login", href: "#login" },
];

function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2 font-heading font-bold text-text">
      <span
        className={`relative grid place-items-center rounded-lg bg-purple text-white font-bold ${
          small ? "size-7 text-[13px]" : "size-8 text-[15px]"
        }`}
      >
        IK
        <span
          className={`absolute -right-[3px] -bottom-[3px] rounded-[3px] bg-orange border-2 border-bg ${
            small ? "size-2" : "size-2.5"
          }`}
        />
      </span>
      <span className={small ? "text-[17px]" : "text-[20px]"}>InvoiceKirim</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {menu.map((m) => (
            <li key={m.href}>
              <a
                href={m.href}
                className="text-[15px] font-medium text-text-dim transition-colors hover:text-text"
              >
                {m.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 rounded-[10px] bg-orange px-5 py-3 text-[15px] font-semibold text-[#1a0f08] shadow-[0_8px_24px_-8px_rgba(255,122,69,0.5)] transition hover:-translate-y-0.5 hover:bg-orange-soft"
            >
              Mulai Gratis
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="grid size-10 place-items-center rounded-lg border border-border-strong text-text md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-bg-elev px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {menu.map((m) => (
              <li key={m.href}>
                <a
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-text-dim"
                >
                  {m.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#daftar"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-[10px] bg-orange px-5 py-3 text-[15px] font-semibold text-[#1a0f08]"
              >
                Mulai Gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export { Logo };
