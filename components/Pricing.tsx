function Check({ tone }: { tone: "purple" | "orange" }) {
  const bg = tone === "purple" ? "bg-purple/12" : "bg-orange/12";
  const color = tone === "purple" ? "text-purple-soft" : "text-orange-soft";
  return (
    <span className={`mt-0.5 grid size-5 flex-shrink-0 place-items-center rounded-md ${bg}`}>
      <svg viewBox="0 0 20 20" fill="none" className={`size-3.5 ${color}`}>
        <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

type Tier = {
  featured?: boolean;
  name: string;
  desc: string;
  amount: string;
  features: string[];
  ctaLabel: string;
};

const tiers: Tier[] = [
  {
    name: "Gratis",
    desc: "Buat kamu yang baru mulai atau invoice-nya masih dikit",
    amount: "Rp 0",
    features: [
      "5 invoice per bulan",
      "1 template invoice",
      "Share link invoice",
      "Track status pembayaran",
      "Support via email",
    ],
    ctaLabel: "Mulai Gratis",
  },
  {
    featured: true,
    name: "Pro",
    desc: "Buat freelancer & agency yang serius scale up",
    amount: "Rp 49.000",
    features: [
      "Unlimited invoice",
      "Custom branding (logo & warna)",
      "Multi template invoice",
      "Export PDF & Excel",
      "Priority support (respon < 2 jam)",
      "Reminder otomatis ke client",
    ],
    ctaLabel: "Coba Pro 14 Hari",
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-[620px] text-center">
          <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-purple-soft">
            Harga
          </div>
          <h2 className="text-[30px] font-semibold sm:text-[36px] lg:text-[44px]">
            Mulai gratis, upgrade kalau butuh
          </h2>
          <p className="mt-4 text-[17px] text-text-dim">
            Nggak ada biaya tersembunyi. Cancel kapan aja.
          </p>
        </div>

        <div className="mx-auto grid max-w-[880px] gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-[20px] border p-9 ${
                t.featured
                  ? "border-purple bg-bg-elev"
                  : "border-border-subtle bg-bg-elev"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 right-7 rounded-full bg-orange px-3.5 py-1.5 text-[12px] font-bold tracking-wide text-[#1a0f08]">
                  POPULER
                </span>
              )}

              <div className="mb-2 font-heading text-[20px] font-semibold">{t.name}</div>
              <div className="mb-6 text-[14px] text-text-dim">{t.desc}</div>

              <div className="mb-7 flex items-baseline gap-2 border-b border-border-subtle pb-7">
                <span className="font-heading text-[44px] font-bold tracking-tight">
                  {t.amount}
                </span>
                <span className="text-[15px] text-text-mute">/bulan</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-text-dim">
                    <Check tone={t.featured ? "orange" : "purple"} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#daftar"
                className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-[15px] font-semibold transition ${
                  t.featured
                    ? "bg-orange text-[#1a0f08] shadow-[0_8px_24px_-8px_rgba(255,122,69,0.5)] hover:-translate-y-0.5 hover:bg-orange-soft"
                    : "border border-border-strong bg-transparent text-text hover:border-purple"
                }`}
              >
                {t.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
