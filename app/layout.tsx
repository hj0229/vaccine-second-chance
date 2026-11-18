import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter, SiteHeader } from "./_components/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaccine-second-chance.org"),
  title: "成人キャッチアップワクチン基金",
  description:
    "子どもの頃に予防接種の機会を逃した方の、今の選択を支える準備プロジェクト。成人のMR費用支援の優先検討と、HPVの相談・ニーズ調査を進めています。",
  openGraph: {
    title: "受けられなかったワクチンを、今、自分の意思で。",
    description: "MRの費用支援を優先検討し、HPVは相談・ニーズ調査を受け付けています。少人数から始める準備プロジェクトです。",
    siteName: "成人キャッチアップワクチン基金",
    locale: "ja_JP",
    type: "website",
  },
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

