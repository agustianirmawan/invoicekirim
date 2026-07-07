const testimonials = [
  {
    quote:
      "Dulu bikin invoice pake Word, ribet banget. Sekarang tinggal isi form, 30 detik selesai. Client juga bilang tampilannya profesional.",
    name: "Rani Ayu",
    role: "Freelance Designer",
    initials: "RA",
    avatarClass: "bg-purple text-white",
  },
  {
    quote:
      "Fitur track status-nya juara. Sekarang aku tau invoice mana yang belum dibayar tanpa harus buka spreadsheet satu-satu.",
    name: "Bagus Setiawan",
    role: "Web Developer",
    initials: "BS",
    avatarClass: "bg-orange text-[#1a0f08]",
  },
  {
    quote:
      "Share link invoice ke client via WhatsApp itu game-changer. Nggak perlu attach PDF, tinggal klik dan client bisa liat langsung.",
    name: "Maya Pramudita",
    role: "Content Writer",
    initials: "MP",
    avatarClass: "bg-purple-deep text-white",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-[620px] text-center">
          <div className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-purple-soft">
            Dipercaya Freelancer
          </div>
          <h2 className="text-[30px] font-semibold sm:text-[36px] lg:text-[44px]">
            Ribuan invoice terbayar tepat waktu
          </h2>
        </div>

        <div className="mx-auto mb-14 grid max-w-[720px] gap-6 rounded-[20px] border border-border-subtle bg-bg-elev p-10 sm:grid-cols-2 sm:gap-0">
          <div className="relative text-center sm:pr-6">
            <div className="font-heading text-[40px] font-bold leading-none">
              500<span className="text-orange">+</span>
            </div>
            <div className="mt-2 text-[14px] text-text-dim">Invoice dibuat</div>
            <span
              aria-hidden
              className="absolute -bottom-3 left-[10%] right-[10%] h-px bg-border-subtle sm:top-[10%] sm:bottom-[10%] sm:left-auto sm:right-0 sm:h-auto sm:w-px"
            />
          </div>
          <div className="text-center sm:pl-6">
            <div className="font-heading text-[40px] font-bold leading-none">
              Rp 2M<span className="text-orange">+</span>
            </div>
            <div className="mt-2 text-[14px] text-text-dim">Berhasil tertagih</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-[20px] border border-border-subtle bg-bg-elev p-7"
            >
              <div className="mb-4 tracking-[2px] text-[14px] text-orange">★★★★★</div>
              <p className="mb-6 flex-1 text-[15px] text-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`grid size-11 place-items-center rounded-full font-heading font-semibold text-[15px] ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[15px] font-semibold">{t.name}</div>
                  <div className="text-[13px] text-text-mute">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
