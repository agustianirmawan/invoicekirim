import { Logo } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Logo small />
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <a href="#" className="text-[14px] text-text-dim transition-colors hover:text-text">
                Tentang
              </a>
            </li>
            <li>
              <a href="#" className="text-[14px] text-text-dim transition-colors hover:text-text">
                Kontak
              </a>
            </li>
            <li>
              <a href="#" className="text-[14px] text-text-dim transition-colors hover:text-text">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="text-[14px] text-text-mute">
          © 2026 InvoiceKirim. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
