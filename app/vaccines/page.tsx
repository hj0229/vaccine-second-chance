import type { Metadata } from "next";
import { BulletList, ContentSection, CtaGroup, InfoCard, NoticeCard, PageShell, SectionHeading } from "../_components/site";

export const metadata: Metadata = {
  title: "成人のMR・HPVワクチン：効果・注意点と根拠 | 成人キャッチアップワクチン基金",
  description: "成人後のMR・HPVワクチンを検討するための一般的な情報です。国内の公費制度と海外の推奨を区別し、厚生労働省・CDCの資料を示します。",
};

const references = [
  { id: "mr", label: "厚生労働省 MRワクチン", href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/yobou-sesshu/vaccine/mr/index.html" },
  { id: "measles", label: "厚生労働省 麻しんQ&A（Q4〜6：罹患歴・成人の相談・MR）", href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/measles_qa.htm" },
  { id: "hpv", label: "厚生労働省 HPVワクチンQ&A", href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou/hpv_qa.html" },
  { id: "catchup", label: "厚生労働省 HPVワクチンのキャッチアップ接種", href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou/hpv_catch-up-vaccination.html" },
  { id: "cdc", label: "CDC HPV Vaccine Recommendations（米国の推奨）", href: "https://www.cdc.gov/hpv/hcp/vaccination-considerations/index.html" },
  { id: "jsgo", label: "日本婦人科腫瘍学会 HPVワクチンQ&A（2021年改訂・制度情報は厚労省の現行資料を参照）", href: "https://www.jsgo.or.jp/entry_general/news/20211224/1113/" },
];

function Sources({ ids }: { ids: string[] }) {
  return <p className="mt-4 text-sm leading-7 text-slate-600">根拠：{references.filter(ref => ids.includes(ref.id)).map((ref, index) => <span key={ref.id}>{index ? " ／ " : ""}<a href={ref.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{ref.label}</a></span>)}</p>;
}

const faqs = [
  {
    title: "性交渉経験があっても、接種を考える意味はありますか？",
    items: ["HPVワクチンは新たな感染を防ぐもので、すでにある感染や病変を治療するものではありません。", "性交渉経験があっても、対象となるすべてのHPV型に感染しているとは限りません。ただし、接種で得られる利益は年齢・接種歴・今後の感染リスクで異なります。"],
    sources: ["cdc"],
  },
  {
    title: "既婚・パートナーが1人の場合は？",
    items: ["婚姻状況だけでは判断できません。互いに長期的に単一のパートナー関係にある場合、新たなHPV感染の可能性は低いとされています。", "今後の新しいパートナーの可能性なども踏まえ、利益と費用を医療機関で相談してください。接種を選ばない判断も尊重します。"],
    sources: ["cdc"],
  },
  {
    title: "年齢によって考え方は変わりますか？",
    items: ["感染する前の接種で高い予防効果が期待されます。", "米国CDCは、十分に接種していない人への26歳までの接種を推奨し、27〜45歳では一律の接種ではなく個別の相談で判断するとしています。これは米国の推奨であり、日本の公費対象や承認条件を示すものではありません。", "日本で使用できる製剤や接種対象、助成は、医療機関・自治体で確認してください。"],
    sources: ["cdc", "hpv"],
  },
  {
    title: "どの製剤で、何回接種しますか？",
    items: ["日本の定期接種で使うHPVワクチンは、2026年4月から9価ワクチンです。任意接種で使用する製剤・回数・間隔は、年齢やこれまでの接種歴などを踏まえて医療機関で確認してください。", "2価・4価ワクチンを途中まで接種している方も、記録を持参して相談してください。"],
    sources: ["hpv"],
  },
  {
    title: "副反応や、妊娠についての注意点は？",
    items: ["接種部位の痛みや腫れ、発熱などが起こることがあります。失神への注意や、まれな重い副反応も含め、接種前に医療機関で説明を受けてください。", "HPVワクチンは妊娠中の接種は推奨されません。妊娠中・妊娠の可能性がある場合や、重いアレルギー歴がある場合は、接種前に医師へ伝えてください。"],
    sources: ["hpv", "cdc"],
  },
  {
    title: "接種後も子宮頸がん検診は必要ですか？",
    items: ["必要です。ワクチンですべての原因となるHPV型を防げるわけではありません。接種後も対象年齢に応じた検診を受けてください。", "検診の方法や間隔は、お住まいの自治体や医療機関で確認してください。"],
    sources: ["hpv"],
  },
];

export default function VaccinesPage() {
  return <PageShell>
    <ContentSection tone="sky">
      <SectionHeading label="ワクチンについて" title="成人後の接種を、根拠から考える">
        <p>MRとHPVでは、接種を検討する条件も注意点も異なります。以下は一般的な情報です。接種歴や体調を踏まえた判断は、医療機関でご相談ください。</p>
      </SectionHeading>
      <p className="text-center text-sm text-slate-500">情報確認日：2026年11月19日</p>
    </ContentSection>
    <ContentSection>
      <SectionHeading as="h2" label="MR：麻しん・風しん" title="接種歴と罹患歴を確認するところから" />
      <div className="grid gap-5 lg:grid-cols-2">
        <InfoCard title="成人でも、相談する意義があります">
          <BulletList items={["厚生労働省は、定期接種の年齢でなくても、麻しんにかかったことがなく未接種の方に、医師への相談を案内しています。", "2回の接種機会がなかった方で、医療・福祉・教育に関わる方や流行国へ渡航する方なども、追加接種について相談する対象です。", "接種記録がないだけで、全員に同じ回数を接種するわけではありません。過去の接種、検査で確認された罹患歴、抗体の情報などを医師と確認します。"]} />
          <Sources ids={["measles"]} />
        </InfoCard>
        <InfoCard title="期待できる効果と注意点">
          <BulletList items={["MRワクチンは麻しん・風しんを予防します。接種により約95％の人が両ウイルスへの免疫を獲得するとされています。", "MRは生ワクチンです。妊娠中は接種できず、妊娠を希望する方は接種前の確認と接種後約2か月の避妊などが必要です。", "免疫機能の異常、免疫抑制治療、ワクチン成分へのアナフィラキシー歴がある場合などは接種できません。必ず医師へ伝えてください。", "発熱・発しん、接種部位の腫れなどが起こることがあり、まれな重い副反応も報告されています。"]} />
          <Sources ids={["mr"]} />
        </InfoCard>
      </div>
    </ContentSection>
    <ContentSection tone="slate">
      <SectionHeading as="h2" label="HPV：ヒトパピローマウイルス" title="年齢・接種歴・今後の状況を踏まえて考える" />
      <div className="mx-auto max-w-4xl space-y-4">{faqs.map(faq => <details key={faq.title} className="group rounded-lg border border-sky-100 bg-white p-5 shadow-sm open:border-teal-200">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold leading-7 sm:text-lg [&::-webkit-details-marker]:hidden"><span>{faq.title}</span><span aria-hidden="true" className="text-teal-700 group-open:rotate-45">＋</span></summary>
        <div className="mt-4 border-t border-sky-100 pt-4"><BulletList items={faq.items} /><Sources ids={faq.sources} /></div>
      </details>)}</div>
    </ContentSection>
    <ContentSection>
      <InfoCard title="国の公費制度と、このプロジェクトの補助は別です">
        <p>国のHPVキャッチアップ接種の経過措置は、2026年3月31日で終了しています。自治体独自の助成の有無・条件は、お住まいの自治体に確認してください。</p>
        <p className="mt-3">本プロジェクトは国・自治体の制度とは別の準備プロジェクトです。相談を受け付けていますが、補助は個別に検討し、接種前に対象費用・回数・上限額を確認します。</p>
        <Sources ids={["catchup"]} />
      </InfoCard>
    </ContentSection>
    <ContentSection tone="slate">
      <div className="mx-auto max-w-3xl space-y-6"><h2 className="text-2xl font-semibold">迷っている段階でも、ご相談いただけます。</h2><p className="text-base leading-8 text-slate-700">接種歴や困りごとの整理、費用補助の方針を案内します。診断や接種可否の判断、医療機関の紹介の確約は行いません。</p><CtaGroup /><NoticeCard compact /></div>
    </ContentSection>
    <ContentSection>
      <SectionHeading as="h2" label="参考資料" title="公式情報で確認する"><p>制度や推奨は変更される場合があります。国内の制度は厚生労働省と自治体の最新案内を確認してください。</p></SectionHeading>
      <ul className="mx-auto max-w-4xl space-y-3">{references.map(ref => <li key={ref.id}><a href={ref.href} target="_blank" rel="noopener noreferrer" className="text-base leading-8 text-teal-800 underline underline-offset-4">{ref.label}</a></li>)}</ul>
    </ContentSection>
  </PageShell>;
}

