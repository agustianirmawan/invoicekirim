export default function CtaBanner() {
  return (
    <section id="daftar" className="pb-24 pt-12 md:pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-bg-elev px-6 py-16 text-center md:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 -left-[20%] size-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[60%] -right-[10%] size-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,122,69,0.18),transparent_60%)]"
          />

          <div className="relative">
            <h2 className="text-[28px] font-semibold sm:text-[34px] lg:text-[42px]">
              Mulai Bikin Invoice Sekarang
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[17px] text-text-dim">
              Gabung dengan ratusan freelancer yang udah tinggalin cara lama.
              Gratis selamanya untuk 5 invoice/bulan.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange px-7 py-4 text-[16px] font-semibold text-[#1a0f08] shadow-[0_8px_24px_-8px_rgba(255,122,69,0.5)] transition hover:-translate-y-0.5 hover:bg-orange-soft"
            >
              Daftar Gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
