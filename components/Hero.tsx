const items = [
  { label: "Desain Landing Page", price: "Rp 5.000.000" },
  { label: "Revisi (2x)", price: "Rp 800.000" },
  { label: "Konsultasi", price: "Rp 500.000" },
];

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-48 -right-36 size-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,122,69,0.12),transparent_65%)]"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elev py-1.5 pr-3.5 pl-2 text-[13px] text-text-dim">
            <span className="rounded-full bg-purple px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white">
              BARU
            </span>
            Kirim invoice via WhatsApp langsung
          </span>

          <h1 className="text-[38px] font-semibold sm:text-[46px] lg:text-[60px]">
            Bikin Invoice Profesional dalam{" "}
            <span className="relative inline-block text-orange">
              30 Detik
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-10 h-2 rounded-sm bg-orange/20"
              />
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[17px] text-text-dim md:text-[18px]">
            Nggak perlu Excel, nggak perlu template ribet. Isi form, klik kirim,
            selesai. Client langsung terima invoice yang rapi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-4 text-[16px] font-semibold text-[#1a0f08] shadow-[0_8px_24px_-8px_rgba(255,122,69,0.5)] transition hover:-translate-y-0.5 hover:bg-orange-soft"
            >
              Mulai Gratis — Tanpa Kartu Kredit
              <ArrowRight />
            </a>
            <span className="flex items-center gap-1.5 text-[14px] text-text-mute">
              <span className="font-bold text-success">✓</span> Setup 60 detik
            </span>
          </div>
        </div>

        <div className="relative [perspective:1400px]">
          <div
            className="rounded-[20px] border border-border-subtle bg-bg-elev p-6 shadow-[0_0_60px_-12px_rgba(139,92,246,0.35),0_30px_60px_-20px_rgba(0,0,0,0.5)] lg:[transform:rotate3d(1,-0.3,0,3deg)]"
          >
            <div className="mb-5 flex items-center justify-between border-b border-border-subtle pb-4">
              <div>
                <div className="font-heading text-[18px] font-semibold">
                  Invoice #INV-0042
                </div>
                <div className="mt-1 text-[13px] text-text-mute">
                  Untuk: PT Kopi Nusantara
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-success/10 px-2.5 py-1 text-[12px] font-semibold text-success">
                <span className="size-1.5 rounded-full bg-success" /> Lunas
              </span>
            </div>

            {items.map((i) => (
              <div
                key={i.label}
                className="flex items-center justify-between py-2.5 text-[14px] text-text-dim"
              >
                <span>{i.label}</span>
                <strong className="font-medium text-text">{i.price}</strong>
              </div>
            ))}

            <div className="mt-4 flex items-center justify-between rounded-xl bg-bg-elev-2 p-5">
              <div className="text-[13px] text-text-dim">Total</div>
              <div className="font-heading text-[24px] font-bold text-orange">
                Rp 6.300.000
              </div>
            </div>

            <div className="mt-4 rounded-[10px] bg-purple py-3 text-center text-[14px] font-semibold text-white">
              Bagikan Link Invoice
            </div>
          </div>

          <div className="absolute -top-5 -left-4 flex items-center gap-2.5 rounded-xl border border-border-strong bg-bg-elev-2 px-4 py-3 text-[13px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.4)] sm:-left-8">
            <span className="grid size-8 place-items-center rounded-lg bg-purple/20 text-purple-soft">
              <BoltIcon />
            </span>
            <div>
              <div className="font-semibold">30 detik</div>
              <div className="text-[11px] text-text-mute">Bikin invoice</div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-6 flex items-center gap-2.5 rounded-xl border border-border-strong bg-bg-elev-2 px-4 py-3 text-[13px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.4)] sm:-right-8">
            <span className="grid size-8 place-items-center rounded-lg bg-orange/20 text-orange-soft">
              <CheckIcon />
            </span>
            <div>
              <div className="font-semibold">Terkirim</div>
              <div className="text-[11px] text-text-mute">Ke client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
