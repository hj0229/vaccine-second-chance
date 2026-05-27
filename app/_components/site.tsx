import Link from "next/link";

export const formUrl = "https://forms.gle/1aEDxBHTyjaXoR4C8";
export const xUrl = "https://x.com/VSCF_Japan";
export const email = "info@vaccine-second-chance.org";

const navItems = [
  { label: "トップ", href: "/" },
  { label: "第0期パイロット", href: "/pilot" },
  { label: "接種までの流れ", href: "/flow" },
  { label: "ワクチンについて", href: "/vaccines" },
  { label: "団体について", href: "/about" },
  { label: "協力・寄付", href: "/support" },
  { label: "個人情報", href: "/privacy" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-teal-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="text-base font-semibold text-slate-950">
          成人キャッチアップワクチン基金
        </Link>
        <nav aria-label="主要ナビゲーション" className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-800"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-2 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
          >
            公式X
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm leading-7 text-slate-500">
      <p>© 2026 成人キャッチアップワクチン基金 / Vaccine Second Chance Fund Japan</p>
      <p className="mt-1">
        本プロジェクトは診療行為や接種可否判断を行いません。
      </p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {children}
    </main>
  );
}

export function SectionHeading({
  label,
  title,
  children,
  align = "center",
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">
        {label}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
        {title}
      </h1>
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
      <CtaLink href={formUrl} external>
        MR/HPVワクチン接種を相談する
      </CtaLink>
      {includePilot ? (
        <CtaLink href="/pilot" variant="secondary">
          第0期パイロットの詳細を見る
        </CtaLink>
      ) : null}
      <CtaLink href={xUrl} external variant="secondary">
        公式Xを見る
      </CtaLink>
    </div>
  );
}

export function NoticeCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-lg border border-teal-100 bg-white/80 p-5 text-sm leading-7 text-slate-600 shadow-sm">
      <p>
        本プロジェクトは診療行為や接種可否判断を行いません。実際の接種可否、必要回数、接種間隔、体調や既往歴に関する判断は、必ず医療機関で相談してください。
      </p>
      {!compact ? (
        <p className="mt-2">
          第0期の補助は、対象条件、所定の上限、医療機関での接種可否確認、領収書・接種記録の確認を踏まえて個別に判断します。
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
