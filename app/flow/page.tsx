import type { Metadata } from "next";

import {
  BulletList,
  ContentSection,
  CtaLink,
  formUrl,
  InfoCard,
  NoticeCard,
  PageShell,
  SectionHeading,
} from "../_components/site";

export const metadata: Metadata = {
  title: "接種までの流れ | 成人キャッチアップワクチン基金",
  description:
    "第0期パイロットで、フォーム相談後に医療機関での相談・接種、書類提出、補助実施までに進む流れを説明します。",
};

const steps = [
  {
    step: "STEP 1",
    title: "フォームから相談",
    icon: "📝",
    items: [
      "相談したいワクチン、接種歴、困りごと、費用面の不安などをフォームから送信します。",
    ],
  },
  {
    step: "STEP 2",
    title: "運営側で内容確認",
    icon: "🔎",
    items: [
      "運営側で、相談内容、対象ワクチン、接種歴、補助希望、連絡先を確認します。",
      "内容を確認したうえで、補助対象候補となるか、医療機関で相談していただきたい内容、接種後に必要となる書類についてご案内します。",
      "必要に応じてメールで追加確認を行います。",
      "なお、本プロジェクトは接種可否の医学的判断を行うものではありません。実際に接種できるかどうかは、医療機関でご相談ください。",
    ],
  },
  {
    step: "STEP 3",
    title: "医療機関で相談・接種",
    icon: "🏥",
    items: [
      "接種可否、必要回数、接種間隔、抗体検査の要否、副反応リスクなどを医療機関で相談します。",
      "医師の判断により、同日に接種できる場合もあります。",
      "必要に応じて、検査や別日の接種となることもあります。",
      "本プロジェクトは診療行為や接種可否判断を行いません。",
    ],
  },
  {
    step: "STEP 4",
    title: "領収書・接種記録の提出",
    icon: "📄",
    items: [
      "接種後、領収書と接種記録を提出していただきます。",
      "接種時には、領収書と接種記録を必ず受け取ってください。",
      "必要書類が確認できない場合、補助できないことがあります。",
    ],
  },
  {
    step: "STEP 5",
    title: "補助実施・活動報告",
    icon: "✅",
    items: [
      "書類確認後、所定の上限内で原則として接種費用を補助します。",
      "補助は、対象条件、予算上限、医療機関での接種可否確認、領収書・接種記録の確認を踏まえて個別に判断します。",
      "すべての相談者への補助をお約束するものではありません。",
      "個人が特定されない形で、活動報告に使用することがあります。",
    ],
  },
];

const notes = [
  "本プロジェクトは診療行為ではありません。",
  "接種可否、必要回数、接種間隔、抗体検査の要否、副反応リスクなどは、必ず医療機関で相談してください。",
  "医療機関での相談と接種は同日になる場合もありますが、医師の判断により別日になることもあります。",
  "本プロジェクトが「接種可」と判断するものではありません。",
  "補助は、対象条件、予算上限、医療機関での接種可否確認、領収書・接種記録の確認を踏まえて個別に判断します。",
];

export default function FlowPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading label="Flow" title="接種までの流れ">
          <p>
            フォーム送信後に、何を準備し、どこで相談し、どの書類が必要になるかを5つのステップで整理しています。
            医療機関での相談と接種は同日になる場合もありますが、実際に接種できるかどうかは医療機関でご相談ください。
          </p>
        </SectionHeading>

        <div className="rounded-lg border border-teal-100 bg-white/80 p-5 text-base leading-8 text-slate-700 shadow-sm">
          <p>
            本プロジェクトは、相談内容の整理と補助に関する案内を行います。接種可否、必要回数、接種間隔、抗体検査の要否、副反応リスクなどの医学的判断は行いません。
          </p>
          <div className="mt-4">
            <CtaLink href="/vaccines" variant="secondary">
              MR/HPVワクチンについて確認する
            </CtaLink>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-teal-100 sm:block" />
          <div className="space-y-5">
            {steps.map((item, index) => (
              <article key={item.step} className="relative">
                <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                  <div className="relative z-10 flex items-start justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-3xl shadow-sm">
                      <span aria-hidden="true">{item.icon}</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold tracking-[0.16em] text-teal-700">
                      {item.step}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-950">
                      {item.title}
                    </h2>
                    <div className="mt-4">
                      <BulletList items={item.items} />
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 ? (
                  <div className="flex h-10 items-center justify-center sm:hidden">
                    <span className="text-2xl text-teal-500" aria-hidden="true">
                      ↓
                    </span>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection tone="slate">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <InfoCard title="必ず確認していただきたいこと">
            <BulletList items={notes} />
          </InfoCard>
          <InfoCard title="次に進む">
            <p>
              相談を始める場合はフォームへ進んでください。第0期パイロットの対象や補助方針、個人情報の取り扱いも事前に確認できます。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href={formUrl} external>
                MR/HPVワクチン接種を相談する
              </CtaLink>
              <CtaLink href="/pilot" variant="secondary">
                第0期パイロット詳細を見る
              </CtaLink>
              <CtaLink href="/vaccines" variant="secondary">
                ワクチンについて見る
              </CtaLink>
              <CtaLink href="/privacy" variant="secondary">
                個人情報の取り扱いを見る
              </CtaLink>
            </div>
          </InfoCard>
        </div>
        <div className="mt-6">
          <NoticeCard />
        </div>
      </ContentSection>
    </PageShell>
  );
}
