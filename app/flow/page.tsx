import type { Metadata } from "next";
import { ContentSection, CtaGroup, NoticeCard, PageShell, SectionHeading, BulletList } from "../_components/site";

export const metadata: Metadata = { title: "事前相談から接種・補助までの流れ | 成人キャッチアップワクチン基金" };

const steps = [
  { title: "事前相談・ニーズ調査に回答", items: ["Googleフォームから、相談したいワクチン、分かる範囲の接種歴、費用の悩みなどを送信してください。", "送信だけでは補助の採択や金額は確定しません。接種するか迷っている段階でも相談できます。"] },
  { title: "運営からの連絡・条件確認", items: ["運営が内容を確認し、必要に応じてメールで追加確認を行います。", "医療機関で確認していただきたいことと、補助対象候補となるかを案内します。", "補助を希望する場合は、医療機関への予約・支払い前に運営へ確認してください。"] },
  { title: "医療機関で相談し、補助条件を確認", items: ["医療機関で、接種可否、必要回数、接種間隔、抗体検査の要否、費用を確認します。相談・検査自体に費用がかかる場合があるため、受診前に医療機関へ確認してください。", "接種前に、運営から補助対象費用・回数・上限額、必要書類、立替の要否、支払い方法・時期の案内を受けてください。", "案内を受け取るまでは補助を見込んで接種・支払いを進めないでください。条件に納得できなければ、接種や申請を見送れます。"] },
  { title: "医療機関で接種・書類を受け取る", items: ["医師の判断とご本人の同意に基づいて接種します。接種日や回数は医療機関で相談してください。", "領収書と、ワクチン名・接種日などが分かる接種記録を受け取り、保管してください。", "予定するワクチン、回数、費用などが事前案内から変わる場合は、接種前に運営へ再確認してください。"] },
  { title: "書類確認・補助", items: ["運営の案内に従って、領収書と接種記録を提出します。", "事前に案内した条件と書類を確認して補助を行います。条件に合わない費用や、確認できない費用は補助できないことがあります。", "活動の経過は、個人が特定されない形で整理・報告することがあります。"] },
];

export default function FlowPage() {
  return <PageShell>
    <ContentSection tone="sky">
      <SectionHeading label="相談後の流れ" title="費用の見通しを確認してから、接種へ。"><p>事前相談から医療機関での確認、接種、補助までの流れです。現在は、少人数で支援の仕組みを整える第0期です。</p></SectionHeading>
      <div className="mx-auto max-w-3xl rounded-lg border border-teal-200 bg-white p-5 text-base leading-8"><strong>補助を希望する方へ</strong><p>予約・支払いの前に運営へ相談し、接種前に補助対象費用・回数・上限額を確認してください。フォーム送信だけでは補助は決まりません。</p></div>
    </ContentSection>
    <ContentSection>
      <ol className="mx-auto max-w-3xl space-y-6">{steps.map((step, index) => <li key={step.title} className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm sm:p-8"><p className="text-sm font-semibold tracking-wider text-teal-700">STEP {index + 1}</p><h2 className="mt-2 text-xl font-semibold">{step.title}</h2><div className="mt-4"><BulletList items={step.items} /></div></li>)}</ol>
    </ContentSection>
    <ContentSection tone="slate"><div className="mx-auto max-w-3xl space-y-6"><h2 className="text-2xl font-semibold">接種歴が分からなくても、まずご相談ください。</h2><CtaGroup /><NoticeCard compact /></div></ContentSection>
  </PageShell>;
}

