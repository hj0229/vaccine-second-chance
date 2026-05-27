import Link from "next/link";

import {
  ContentSection,
  CtaGroup,
  NoticeCard,
  PageShell,
} from "./_components/site";

export default function Home() {
  const cardHrefs = ["/pilot", "/flow", "/about", "/support"];

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300" />
        <div className="mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-800 shadow-sm">
              成人後の接種相談を支える準備プロジェクト
            </p>
            <h1 className="mt-8 text-4xl font-semibold tracking-normal text-slate-950 sm:text-6xl">
              成人キャッチアップワクチン基金
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-600 sm:text-2xl">
              Vaccine Second Chance Fund Japan
            </p>
            <p className="mt-8 text-3xl font-semibold text-teal-800 sm:text-5xl">
              遅れても、今から守れる。
            </p>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-9 text-slate-700 sm:text-xl">
              <p>
                本人の意思によらず予防接種の機会を逃した人が、成人後に自分の意思で接種を検討できるよう、情報整理、相談先への接続、費用補助の仕組みづくりを進めています。
              </p>
              <p>
                現在、第0期 MR/HPVワクチン接種相談パイロットを実施中です。第0期では、まず5名程度を目安に、所定の上限内で原則として接種費用を全額補助する予定です。
              </p>
            </div>
            <p className="mt-5 max-w-3xl rounded-lg border border-teal-100 bg-white/80 p-5 text-base leading-8 text-slate-700 shadow-sm">
              ただし、すべての相談者に補助を約束するものではありません。対象条件、医療機関での接種可否確認、必要書類の確認などを踏まえて個別に判断します。
            </p>
            <div className="mt-10 space-y-5">
              <CtaGroup />
              <NoticeCard compact />
            </div>
          </div>
        </div>
      </section>

      <ContentSection tone="sky">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "第0期パイロット",
              text: "MR/HPVワクチンから小規模に相談導線を検証します。",
            },
            {
              title: "接種までの流れ",
              text: "フォーム相談後に、医療機関での相談・接種、書類提出、補助までの流れを確認できます。",
            },
            {
              title: "団体について",
              text: "成人後に選び直せる社会を目指し、透明性のある運営体制を整えます。",
            },
            {
              title: "協力者募集",
              text: "医療、会計、法務・個人情報保護、Web・広報の協力者を募集しています。",
            },
          ].map((item, index) => (
            <Link
              key={item.title}
              href={cardHrefs[index]}
              className="block rounded-lg border border-sky-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md focus-visible:-translate-y-1 focus-visible:border-sky-400 focus-visible:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  );
}
