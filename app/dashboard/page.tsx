import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Logo } from "@/components/Navbar";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const emailName = user.email?.split("@")[0] ?? "kamu";

  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border-subtle px-6 py-4">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <Logo />
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-2 text-[14px] text-text-dim transition hover:border-border-strong hover:text-text"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="size-4">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="mb-10">
          <h1 className="font-heading text-[30px] font-semibold text-text">
            Halo, <span className="text-purple-soft">{emailName}</span>!
          </h1>
          <p className="mt-1.5 text-[15px] text-text-dim">{user.email}</p>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-elev px-8 py-16 text-center">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl border border-purple/20 bg-purple/10">
            <svg viewBox="0 0 24 24" fill="none" className="size-8 text-purple-soft" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="mb-3 font-heading text-[22px] font-semibold text-text">
            Fitur invoice akan dibangun di sesi berikutnya
          </h2>
          <p className="mx-auto max-w-[400px] text-[15px] leading-relaxed text-text-dim">
            Dashboard kamu sudah siap. Selanjutnya kita akan bangun fitur buat, kirim, dan lacak invoice dari sini.
          </p>
        </div>
      </main>
    </div>
  );
}
