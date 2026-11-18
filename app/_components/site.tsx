import Link from "next/link";

export const formUrl = "https://forms.gle/1aEDxBHTyjaXoR4C8";
// Re-enable only after all four form branches, consent and submission are verified.
export const consultationFormReady = true;
export const xUrl = "https://x.com/VSCF_Japan";
export const email = "info@vaccine-second-chance.org";

const navItems = [
  { label: "トップ", href: "/" },
  { label: "接種・費用の相談", href: "/pilot" },
  { label: "接種までの流れ", href: "/flow" },
  { label: "ワクチンについて", href: "/vaccines" },
  { label: "団体について", href: "/about" },
  { label: "協力・寄付", href: "/support" },
  { label: "個人情報", href: "/privacy" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-teal-100 bg-white/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-30 focus:bg-white focus:p-4 focus:text-teal-800">本文へ移動</a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="shrink-0 text-base font-semibold text-slate-950">
          成人キャッチアップワクチン基金
        </Link>
        <nav aria-label="主要ナビゲーション" className="hidden flex-wrap gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="md:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center rounded-lg px-3 text-sm font-semibold text-teal-800">メニュー</summary>
          <nav aria-label="モバイルナビゲーション" className="absolute inset-x-0 top-full grid gap-1 border-b border-teal-100 bg-white p-4 shadow-sm">
            {navItems.map((item) => <a key={item.href} href={item.href} className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-teal-50">{item.label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm leading-7 text-slate-500">
      <p>© 2026 成人キャッチアップワクチン基金 / Vaccine Second Chance Fund Japan</p>
      <p>設立準備プロジェクト　代表：田中寛顕</p>
      <p className="mt-1">接種に関する医学的判断は医療機関で行います。</p>
      <a href={`mailto:${email}`} className="underline underline-offset-4">{email}</a>
      <p><a href={xUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">公式X</a></p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white text-slate-900">
      <SupportStatus />
      {children}
    </main>
  );
}

export function SectionHeading({
  label,
  title,
  children,
  align = "center",
  as: Heading = "h1",
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">
        {label}
      </p>
      <Heading className="mt-3 text-balance text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
        {title}
      </Heading>
      {children ? (
        <div className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
}) {
  const variants = {
    primary:
      "bg-teal-700 text-white shadow-lg shadow-teal-900/10 hover:bg-teal-800 focus-visible:outline-teal-700",
    secondary:
      "border border-teal-200 bg-white text-teal-800 shadow-sm hover:bg-teal-50 focus-visible:outline-teal-700",
    light:
      "bg-white text-teal-800 shadow-none hover:bg-teal-50 focus-visible:outline-white",
  };

  const className = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-base ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function CtaGroup({ includePilot = true }: { includePilot?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {consultationFormReady ? <CtaLink href={formUrl} external>
        接種・費用について事前相談する
      </CtaLink> : <div className="w-full rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-slate-800" role="status">
        <p className="font-semibold">相談フォームは更新・動作確認中です。</p>
        <p>確認が終わり次第、このページからご案内します。お問い合わせはメールで受け付けています。まずは連絡用の名前と相談の概要だけをお知らせください。詳しい病歴・妊娠・性生活・所得や書類は送らないでください。</p>
        <a href={`mailto:${email}`} className="mt-3 inline-flex min-h-11 items-center break-all font-semibold text-teal-800 underline underline-offset-4">{email}</a>
      </div>}
      {includePilot ? (
        <CtaLink href="/pilot" variant="secondary">
          対象・補助方針を見る
        </CtaLink>
      ) : null}
    </div>
  );
}

export function NoticeCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-lg border border-teal-100 bg-white/80 p-5 text-sm leading-7 text-slate-600 shadow-sm">
      <p>
        接種するかどうかは、ご本人と医療機関で相談して決めます。本プロジェクトは、情報整理と費用補助に関する案内を行います。
      </p>
      {!compact ? (
        <p className="mt-2">
          フォーム送信だけでは補助は決まりません。補助を希望する方は、予約・支払いの前に、対象費用・回数・上限額について運営からの案内を確認してください。
        </p>
      ) : null}
    </div>
  );
}

export function ContentSection({
  children,
  tone = "white",
}: {
  children: React.ReactNode;
  tone?: "white" | "sky" | "slate" | "emerald" | "teal";
}) {
  const tones = {
    white: "bg-white",
    sky: "bg-gradient-to-b from-white to-sky-50",
    slate: "bg-slate-50",
    emerald: "bg-gradient-to-b from-emerald-50 to-white",
    teal: "bg-teal-800 text-white",
  };

  return (
    <section className={`${tones[tone]} px-6 py-16 sm:px-8 sm:py-20 lg:px-10`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-3 text-base leading-8 text-slate-700">{children}</div>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-8 text-slate-700">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}


export function SupportStatus() {
  return <aside aria-label="現在の支援方針" className="border-b border-teal-100 bg-teal-50 px-6 py-5"><div className="mx-auto max-w-6xl"><p className="mb-3 text-sm font-semibold">第0期準備中：事前相談・ニーズ調査を受付中</p><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-lg border border-teal-200 bg-white p-4"><h2 className="font-semibold text-teal-900">MR｜費用補助の優先検討対象</h2><p className="mt-2 text-sm leading-7">資金・選考基準・支払い方法などを準備中です。相談の送信だけでは補助は決まりません。</p></div><div className="rounded-lg border border-sky-200 bg-white p-4"><h2 className="font-semibold text-slate-900">HPV｜相談・ニーズ調査</h2><p className="mt-2 text-sm leading-7">一般情報や公的制度・相談先をご案内します。第0期の費用補助は現時点で予定・確約していません。将来の支援拡大はMRの結果を踏まえて検討します。</p></div></div></div></aside>;
}
