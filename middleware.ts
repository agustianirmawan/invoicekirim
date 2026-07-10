import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = createClient(request);
  const { pathname } = request.nextUrl;

  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname === "/login";

  if (!isDashboard && !isLogin) {
    return supabaseResponse;
  }

  // getUser() validates server-side — safer than getSession() for auth checks
  const { data: { user } } = await supabase.auth.getUser();

  if (isDashboard && !user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  if (isLogin && user) {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard";
    return NextResponse.redirect(dashboardUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
