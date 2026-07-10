"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Logo } from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback`
        : "http://localhost:3000/auth/callback";

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-[420px]">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-elev px-8 py-10">
          {sent ? (
            <div className="text-center">
              <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-success/10">
                <svg viewBox="0 0 24 24" fill="none" className="size-7 text-success" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h1 className="mb-2 font-heading text-[22px] font-semibold text-text">
                Cek email kamu
              </h1>
              <p className="text-[15px] leading-relaxed text-text-dim">
                Kami kirim link login ke{" "}
                <span className="font-medium text-text">{email}</span>.
                Klik link-nya untuk masuk.
              </p>
              <p className="mt-5 text-[13px] text-text-mute">
                Tidak menerima email?{" "}
                <button
                  onClick={() => { setSent(false); setEmail(""); }}
                  className="text-purple-soft underline-offset-2 hover:underline"
                >
                  Kirim ulang
                </button>
              </p>
            </div>
          ) : (
            <>
              <h1 className="mb-1.5 font-heading text-[24px] font-semibold text-text">
                Masuk ke InvoiceKirim
              </h1>
              <p className="mb-7 text-[15px] text-text-dim">
                Masukkan email kamu dan kami kirim link login — tanpa password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-text-dim">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="kamu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border-subtle bg-bg px-4 py-3 text-[15px] text-text outline-none placeholder:text-text-mute transition focus:border-purple focus:ring-2 focus:ring-purple/20"
                  />
                </div>

                {error && (
                  <p className="rounded-lg border border-red-500/20 bg-red-500/8 px-4 py-2.5 text-[13px] text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-[15px] font-semibold text-[#1a0f08] shadow-[0_8px_24px_-8px_rgba(255,122,69,0.45)] transition hover:-translate-y-0.5 hover:bg-orange-soft disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? "Mengirim..." : "Kirim Magic Link"}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-[13px] text-text-mute">
          Belum punya akun?{" "}
          <a href="/#harga" className="text-purple-soft underline-offset-2 hover:underline">
            Daftar gratis
          </a>
        </p>
      </div>
    </div>
  );
}
