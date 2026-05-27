import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter, SiteHeader } from "./_components/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "成人キャッチアップ・ワクチン基金",
  description:
    "本人の意思によらず予防接種の機会を逃した人が、成人後に接種を検討できるよう支える準備プロジェクトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
