import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "成人キャッチアップワクチン基金",
  description:
    "本人の意思によらず予防接種の機会を逃した人が、成人後に自分の意思で接種を希望したとき、その一歩を社会で支える仕組みを準備するプロジェクトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
