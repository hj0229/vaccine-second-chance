import type { Metadata } from "next";
import { BulletList, ContentSection, CtaGroup, CtaLink, InfoCard, NoticeCard, PageShell, SectionHeading, email } from "../_components/site";

export const metadata: Metadata = {
  title: "MR・HPVの接種と費用の事前相談 | 成人キャッチアップワクチン基金",
  description: "成人後のMR・HPVワクチンについて、接種歴や費用の悩みを伺います。少人数での第0期の事前相談・ニーズ調査です。補助条件は接種前に個別確認します。",
};

const subsidyRows = [
  ["費用補助の優先検討対象", "MR（麻しん・風しん混合）。HPVは相談・ニーズ調査のみで、第0期の費用補助は予定・確約していません。"],
  ["選考の公平性", "基準・確認手順は準備中です。費用支援を始める前に、対象条件と選考方法を明示する予定です。接種機会を逃した理由や家族との関係を証明させる方針ではありません。"],
  ["人数・募集期間", "人数は未確定です。送信順での採択や補助を保証するものではありません。"],
  ["補助額・対象回数", "現時点では一律の金額・回数を公表していません。MRの補助を行う場合は、接種前に個別に案内します。"],
  ["接種費用", "補助を検討する主な費用です。全額補助になるかどうかも、事前案内で確認してください。"],
  ["診察料・抗体検査費など", "診察料、抗体検査費、文書料、交通費などは自動的には含まれません。事前の確認が必要です。"],
  ["支払い方法・時期", "MRで補助を行う場合、接種後の領収書・接種記録の確認を想定しています。立替の要否、提出方法、支払い時期は接種前に確認してください。"],
  ["自治体などの助成", "利用できる公的制度や他の助成があるか確認し、重複する費用の扱いを整理します。"],
];

export default function PilotPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading label="接種と費用の事前相談" title="受けられなかったワクチンを、今、自分の意思で。">
          <p>成人後にMR・HPVワクチンを考えている方へ。接種歴が分からない、相談先に迷う、費用が不安。その悩みを一緒に整理します。</p>
        </SectionHeading>
        <div className="mx-auto max-w-3xl space-y-5">
          <CtaGroup includePilot={false} />
          <p className="text-sm leading-7 text-slate-600">現在は第0期の事前相談・ニーズ調査の準備中です。Googleフォームは更新・動作確認中です。MRの補助はまだ確定していません。HPVは相談・ニーズ調査を受け付けています。</p>
          <div className="rounded-lg border border-teal-200 bg-white p-5 text-base leading-8 text-slate-800">
            <p className="font-semibold">補助を希望する方は、予約・支払いの前にご相談ください。</p>
            <p className="mt-2">運営から対象費用・回数・上限額の案内を受け、自己負担の見込みを確認してから進めます。フォーム送信だけでは、採択や費用補助は決まりません。</p>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <SectionHeading as="h2" label="相談できる方" title="接種歴が分からなくても相談できます">
          <p>子どもの頃・思春期に接種機会を逃した方や、接種歴が不明で、成人後に自分の意思で接種を検討している方を対象にしています。</p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="こんな悩みを伺います">
            <BulletList items={["MR・HPVワクチンの接種歴が分からない", "医療機関で何を相談すればよいか分からない", "費用が不安で、接種をためらっている", "定期接種の年齢を過ぎてから接種を考えている", "接種を受けるかどうか、まだ決めていない"]} />
          </InfoCard>
          <InfoCard title="事前に知っておいていただきたいこと">
            <BulletList items={["接種できなかった理由の証明や、家族との関係の説明は不要です", "相談した後に接種しない選択もできます", "成人の相談を受け付けますが、年齢・地域などの補助条件は個別確認となります", "接種できるかどうか、必要回数などは医療機関で確認します"]} />
          </InfoCard>
        </div>
      </ContentSection>
      <ContentSection tone="slate">
        <SectionHeading as="h2" label="費用補助" title="決まっていること・これから確認すること">
          <p>第0期ではMRへの費用支援を優先的に検討します。実施人数・開始日・資金・選考基準・支払い方法・協力医療機関は準備中です。未確定の条件も含め、現在の方針をお伝えします。</p>
        </SectionHeading>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-left text-sm leading-7 sm:text-base">
            <caption className="sr-only">第0期の相談と費用補助の方針</caption>
            <thead className="bg-teal-50"><tr><th scope="col" className="w-1/3 p-4 sm:w-1/4">項目</th><th scope="col" className="p-4">現在の方針</th></tr></thead>
            <tbody>{subsidyRows.map(([label, value]) => <tr key={label} className="border-t border-slate-200"><th scope="row" className="p-4 align-top font-semibold">{label}</th><td className="p-4 text-slate-700">{value}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600">案内前に接種・支払いをした費用への補助はお約束できません。すでに接種済みの場合も、まず状況をお知らせください。</p>
      </ContentSection>
      <ContentSection>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="相談後の流れ">
            <BulletList items={["Googleフォームで接種歴や困りごと、補助希望を送信", "運営が内容を確認し、必要に応じてメールで追加確認", "医療機関への相談事項と、補助を行う場合の条件を接種前に確認", "条件に納得したうえで、医療機関で相談・接種し、必要書類を提出"]} />
            <div className="mt-5"><CtaLink href="/flow" variant="secondary">手続きの流れを見る</CtaLink></div>
          </InfoCard>
          <InfoCard title="なぜMR・HPVから始めるのか">
            <p>接種歴の確認や費用の悩みを伺い、成人後でも本人が納得して検討できるようにするためです。第0期はMRへの支援を優先して運用上の課題を確認します。HPVは一般情報の提供と将来の支援に向けたニーズ調査を続けます。</p>
            <div className="mt-5"><CtaLink href="/vaccines" variant="secondary">効果・注意点と根拠を見る</CtaLink></div>
          </InfoCard>
        </div>
      </ContentSection>
      <ContentSection tone="slate">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold">まずは、今の状況をお聞かせください。</h2>
          <CtaGroup includePilot={false} />
          <p className="text-sm leading-7 text-slate-600">フォーム再開後は、事前相談・ニーズ調査を兼ねて受け付けます。送信後は、入力したメールアドレスへの連絡をお待ちください。返信が届かない場合は迷惑メールフォルダをご確認のうえ、<a className="break-all underline underline-offset-4" href={`mailto:${email}`}>{email}</a>へお問い合わせください。</p>
          <NoticeCard compact />
          <p className="text-sm leading-7 text-slate-600">運営への協力をご希望の方は、<a href="/support" className="underline underline-offset-4">協力者募集ページ</a>をご覧ください。</p>
        </div>
      </ContentSection>
    </PageShell>
  );
}

