import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InvoiceKirim — Bikin Invoice Profesional dalam 30 Detik",
  description:
    "Bikin invoice profesional tanpa Excel. Isi form, share link ke client, track status pembayaran. Gratis untuk 5 invoice/bulan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
