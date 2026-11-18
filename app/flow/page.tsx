import type { Metadata } from "next";
import { ContentSection, CtaGroup, NoticeCard, PageShell, SectionHeading, BulletList } from "../_components/site";

export const metadata: Metadata = { title: "事前相談から接種・補助までの流れ | 成人キャッチアップワクチン基金" };

const steps = [
  { title: "Googleフォームから事前相談", items: ["MR・HPV・両方・その他から相談内容を選びます。送信だけでは補助は決まりません。"] },
  { title: "運営が内容を確認", items: ["診療ではなく、相談内容と情報・費用面の困りごとを整理します。"] },
  { title: "必要に応じて追加確認", items: ["連絡先のメールへご連絡します。接種できなかった理由の証明や、家族との関係の説明は不要です。"] },
  { title: "公的助成を確認", items: ["自治体などの利用可能な制度と相談先を確認します。HPVはここまでの情報提供とニーズ調査を行います。"] },
  { title: "MRの補助を行う場合、接種前に条件を案内", items: ["資金・基準などの準備が整った場合に限り、対象費用・回数・上限額、立替の要否、支払い方法・時期、書類を接種前に案内する予定です。条件に同意するまで補助を見込んだ支払いを進めないでください。"] },
  { title: "医療機関で適応を確認", items: ["接種歴・免疫状態・リスクを踏まえ、接種可否と必要回数を医師が判断します。相談や検査自体の費用も受診前に確認してください。"] },
  { title: "接種・支払い・書類確認", items: ["実施する場合は本人の同意のもと接種し、案内に沿って領収書と接種記録を確認する予定です。支払い方式は未確定です。"] },
  { title: "条件に基づき補助を実施", items: ["事前案内の条件と書類を確認したうえで実施する予定です。これは準備中の想定手順で、現在確立・開始した費用補助ではありません。"] },
];

export default function FlowPage() {
  return <PageShell>
    <ContentSection tone="sky">
      <SectionHeading label="相談後の流れ" title="費用の見通しを確認してから、接種へ。"><p>MRの費用補助を行う場合に想定する流れです。現在は準備中で、補助額・人数・開始日・支払い方法は未確定です。HPVは相談・ニーズ調査のみです。現在は、少人数で支援の仕組みを整える第0期です。</p></SectionHeading>
      <div className="mx-auto max-w-3xl rounded-lg border border-teal-200 bg-white p-5 text-base leading-8"><strong>補助を希望する方へ</strong><p>予約・支払いの前に運営へ相談し、接種前に補助対象費用・回数・上限額を確認してください。フォーム送信だけでは補助は決まりません。</p></div>
    </ContentSection>
    <ContentSection>
      <ol className="mx-auto max-w-3xl space-y-6">{steps.map((step, index) => <li key={step.title} className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm sm:p-8"><p className="text-sm font-semibold tracking-wider text-teal-700">STEP {index + 1}</p><h2 className="mt-2 text-xl font-semibold">{step.title}</h2><div className="mt-4"><BulletList items={step.items} /></div></li>)}</ol>
    </ContentSection>
    <ContentSection tone="slate"><div className="mx-auto max-w-3xl space-y-6"><h2 className="text-2xl font-semibold">接種歴が分からなくても、まずご相談ください。</h2><CtaGroup /><NoticeCard compact /></div></ContentSection>
  </PageShell>;
}

