import type { ReactNode } from "react";

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-6">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-6">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-6">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

type Feat = {
  icon: ReactNode;
  tone: "purple" | "orange";
  title: string;
  body: string;
};

const feats: Feat[] = [
  {
    icon: <BoltIcon />,
    tone: "purple",
    title: "Invoice Instan",
    body: "Isi form sederhana, invoice langsung jadi. Nggak perlu design, nggak perlu setup rumit.",
  },
  {
    icon: <LinkIcon />,
    tone: "orange",
    title: "Share Link",
    body: "Kirim invoice lewat link. Client buka di browser, langsung lihat detail dan bayar tanpa install apapun.",
  },
  {
    icon: <TrackIcon />,
    tone: "purple",
    title: "Track Status",
    body: "Tau mana yang udah dibayar, mana yang belum. Real-time notifikasi biar cash flow-mu tetep aman.",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-[620px] text-center">
          <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-purple-soft">
            Fitur Utama
          </div>
          <h2 className="text-[30px] font-semibold sm:text-[36px] lg:text-[44px]">
            Semua yang kamu butuhin buat nagih client
          </h2>
          <p className="mt-4 text-[17px] text-text-dim">
            Dari bikin invoice sampai track pembayaran — semua dalam satu tempat.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {feats.map((f) => (
            <div
              key={f.title}
              className="rounded-[20px] border border-border-subtle bg-bg-elev p-8 transition duration-200 hover:-translate-y-1 hover:border-border-strong"
            >
              <div
                className={`mb-6 grid size-13 place-items-center rounded-xl border border-border-subtle bg-bg-elev-2 ${
                  f.tone === "purple" ? "text-purple-soft" : "text-orange-soft"
                }`}
                style={{ width: 52, height: 52 }}
              >
                {f.icon}
              </div>
              <h3 className="mb-2.5 text-[20px] font-semibold">{f.title}</h3>
              <p className="text-[15px] text-text-dim">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
