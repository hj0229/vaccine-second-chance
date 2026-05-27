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
  title: "成人後にMR/HPVワクチンを接種する意味 | 成人キャッチアップワクチン基金",
  description:
    "成人後にMRワクチンやHPVワクチンを検討する意味、性交渉経験・既婚・長期パートナーがいる場合のHPVワクチンの考え方、子宮頸がん検診との関係を整理します。",
};

const mrItems = [
  "接種歴が不明、または2回接種が確認できない成人では、MRワクチン接種を検討する意義があります。",
  "MRワクチンは麻しんと風しんの両方を予防するワクチンです。",
  "麻しん対策として、MRワクチンは単独麻しんワクチンと同様の効果が期待されます。",
  "風しん予防にもつながる利点があります。",
  "国内で麻しん報告が増加している状況では、接種歴が不明な成人が医療機関で相談しやすくなることは重要です。",
  "風しんは、将来の妊娠や家族形成に関わる感染症でもあります。",
];

const mrCautions = [
  "MRワクチンは生ワクチンです。",
  "妊娠中は接種できません。",
  "接種後2か月程度は避妊が必要です。",
  "免疫不全、免疫抑制治療中、ワクチン成分でアナフィラキシー歴がある場合などは接種できないことがあります。",
  "実際の接種可否は医療機関で相談してください。",
];

const faqItems = [
  {
    title: "性交渉経験があってもHPVワクチンを打つ意味はありますか？",
    items: [
      "意味がある場合があります。ただし、性交渉前に接種する場合と比べると、予防効果は下がる可能性があります。",
      "HPVワクチンは、すでに感染しているHPVを治療するものではありません。",
      "HPVには複数の型があり、性交渉経験があっても、ワクチンで予防できるすべての型に感染しているとは限りません。",
      "まだ感染していない型への将来の感染を予防する意味があります。",
      "そのため、「性交渉経験があるから意味がない」とは言い切れません。",
      "一方で、すでに感染している型に対する治療効果は期待できないため、年齢、接種歴、今後の感染リスク、本人の希望を踏まえて医療機関で相談することが大切です。",
    ],
  },
  {
    title: "既婚女性でもHPVワクチンを打つ意味はありますか？",
    items: [
      "既婚かどうかだけで、HPVワクチンが必要か不要かを決めることはできません。",
      "重要なのは、年齢、過去のHPVワクチン接種歴、これまでの接種回数、今後の性的曝露リスク、公費対象かどうか、本人の希望です。",
      "長期の単一パートナー関係にあり、今後新しい性的パートナーの可能性が低い場合、追加で得られる予防効果は比較的小さい可能性があります。",
      "一方で、将来の状況は変わることもあり、すべてのHPV型に感染済みとは限らないため、未感染の型への予防を目的に接種を検討する余地があります。",
      "既婚女性であっても、「今から接種しても意味がない」と一律に言うべきではありません。",
      "本人が納得して判断できるよう、産婦人科などで相談することが大切です。",
    ],
  },
  {
    title: "パートナーが1人ならHPVワクチンは不要ですか？",
    items: [
      "パートナーが1人で、互いに長期的な単一パートナー関係である場合、新たなHPV感染のリスクは比較的低い可能性があります。",
      "そのため、HPVワクチンで追加的に得られる利益は小さくなることがあります。",
      "ただし、過去の感染状況や将来の状況を完全に予測することはできません。",
      "HPVワクチンは、まだ感染していない型への将来の感染を防ぐためのワクチンです。",
      "接種するかどうかは、本人の価値観、不安、年齢、接種歴、費用、公費対象かどうかを踏まえて、医療機関で相談してください。",
    ],
  },
  {
    title: "年齢によって考え方は変わりますか？",
    items: [
      "HPVワクチンは、性交渉を経験する前の接種で最も高い予防効果が期待されます。",
      "一般に、若い年齢で未接種の場合ほど接種の意義は大きくなります。",
      "26歳頃までの未接種者では接種を検討する意義が比較的大きいと考えられます。",
      "27〜45歳では、全員に一律というより、今後の感染リスクや本人の希望を踏まえて医療機関で相談して決める考え方が重要です。",
      "45歳を超える場合は、有効性や承認範囲、公的制度の対象を含め、医療機関で個別に確認してください。",
      "日本の公費制度や経過措置の対象かどうかは、自治体や医療機関で確認してください。",
    ],
  },
  {
    title: "HPVワクチンはどれを選べばよいですか？",
    items: [
      "HPVワクチンには、2価、4価、9価があります。",
      "2価は主にHPV16・18型を予防します。",
      "4価はHPV16・18型に加えて、尖圭コンジローマの原因となるHPV6・11型も予防します。",
      "9価はさらにHPV31・33・45・52・58型も対象に含み、予防できるHPV型が最も広いワクチンです。",
      "これから新たに接種を開始する場合、予防対象となるHPV型が多い9価ワクチンが第一候補となることが多いです。",
      "ただし、年齢、公費対象、過去の接種歴、接種途中のワクチンの種類、医療機関で取り扱っているワクチンによって選択肢が変わるため、最終的には医療機関で相談してください。",
      "すでに2価または4価で接種を開始している場合は、原則として同じワクチンで完了しますが、交互接種が検討される場合もあります。",
      "HPVワクチンは既感染HPVを治療するものではありません。9価ワクチンであっても、すでに感染している型を治すものではありません。",
      "HPVワクチン接種後も子宮頸がん検診は必要です。",
    ],
  },
  {
    title: "HPVワクチンを打てば子宮頸がん検診は不要ですか？",
    items: [
      "不要にはなりません。",
      "HPVワクチンは、すべての発がん性HPV型を防ぐものではありません。",
      "すでに感染しているHPVや、すでに生じている病変を治療するものでもありません。",
      "そのため、HPVワクチン接種後も、年齢に応じた子宮頸がん検診は必要です。",
      "検診の頻度や方法は、自治体や医療機関で確認してください。",
    ],
  },
  {
    title: "接種前にHPV検査は必要ですか？",
    items: [
      "HPVワクチン接種前にHPV検査を行うことは一般的ではありません。",
      "HPV検査で陰性でも、将来の感染リスクを完全に否定するものではありません。",
      "HPV検査で陽性でも、ワクチンで予防できる他の型に未感染である可能性があります。",
      "ただし、検査や検診が必要かどうかは、年齢、症状、検診歴、医療機関の方針によって異なります。",
      "気になる症状がある場合や検診を受けていない場合は、産婦人科で相談してください。",
    ],
  },
];

const mrConsultItems = [
  "接種歴が不明",
  "MRまたは麻しん・風しんワクチンを2回接種した記録がない",
  "留学、医療・福祉・教育関係の実習や就職を考えている",
  "将来の妊娠や家族形成を考えている",
  "周囲に妊婦、乳児、免疫が弱い人がいる",
];

const hpvConsultItems = [
  "HPVワクチン未接種、または接種回数が不明",
  "キャッチアップ接種や経過措置の対象かもしれない",
  "性交渉経験はあるが、今から接種する意味があるか相談したい",
  "既婚だが、接種する意味があるか相談したい",
  "パートナーが1人だが、今後の予防について相談したい",
  "子宮頸がん予防について相談したい",
  "今後の感染予防を考えたい",
];

const canItems = [
  "接種歴や困りごとの整理",
  "医療機関で相談する前の情報整理",
  "補助対象候補となるかの確認",
  "接種後の領収書・接種記録確認",
  "所定の上限内での補助検討",
];

const cannotItems = [
  "診断",
  "接種可否の医学的判断",
  "接種スケジュールの最終決定",
  "医療機関の紹介確約",
  "すべての相談者への補助確約",
];

const references = [
  {
    label: "厚生労働省 HPVワクチンQ&A",
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou/hpv_qa.html",
  },
  {
    label: "厚生労働省 麻しんQ&A",
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/measles_qa.htm",
  },
  {
    label: "厚生労働省 風しんQ&A",
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/rubella_qa.html",
  },
  {
    label: "日本産科婦人科学会 HPVワクチンQ&A",
    href: "https://jsgo.or.jp/entry_general/news/20211224/1113/",
  },
  {
    label: "CDC HPV vaccination for adults 27 through 45 years",
    href: "https://www.cdc.gov/vaccines/hcp/admin/downloads/isd-job-aid-scdm-hpv-shared-clinical-decision-making-hpv.pdf",
  },
];

export default function VaccinesPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading
          label="MR / HPV"
          title="成人後にMR/HPVワクチンを接種する意味"
        >
          <p>
            成人後にMRワクチンやHPVワクチンの接種を検討することには意味があります。
          </p>
          <p>
            ただし、接種すべきかどうか、必要回数、接種間隔、抗体検査の要否、妊娠や免疫状態に関わる注意点は、必ず医療機関で相談してください。
          </p>
          <p>
            本ページは一般的な情報整理であり、個別の接種可否判断ではありません。
          </p>
        </SectionHeading>
        <NoticeCard />
      </ContentSection>

      <ContentSection>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <InfoCard title="MRワクチンは成人後でも意味がありますか？">
            <BulletList items={mrItems} />
          </InfoCard>
          <InfoCard title="MRワクチンの注意点">
            <BulletList items={mrCautions} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection tone="slate">
        <SectionHeading label="FAQ" title="HPVワクチンについてよくある質問">
          <p>
            HPVワクチンは「性交渉経験があるか」「既婚か」「パートナーが1人か」だけで必要・不要を決めるものではありません。治療ではなく、まだ感染していない型への将来の感染予防として考えます。
          </p>
        </SectionHeading>
        <div className="grid gap-5">
          {faqItems.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              <BulletList items={item.items} />
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading label="Guide" title="判断の目安">
          <p>
            迷ったときは、接種歴と今後の状況を整理して医療機関に相談してください。
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="MRワクチンを特に相談したい人">
            <BulletList items={mrConsultItems} />
          </InfoCard>
          <InfoCard title="HPVワクチンを特に相談したい人">
            <BulletList items={hpvConsultItems} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection tone="emerald">
        <SectionHeading
          label="Project"
          title="このプロジェクトでできること・できないこと"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="できること">
            <BulletList items={canItems} />
          </InfoCard>
          <InfoCard title="できないこと">
            <BulletList items={cannotItems} />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection tone="teal">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal-100 uppercase">
            Consultation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">
            医療機関で相談する前に、状況を整理する
          </h2>
          <p className="mt-5 text-base leading-8 text-teal-50 sm:text-lg">
            MR/HPVワクチンについて相談したい場合は、接種歴、検討している理由、費用面の不安、医療機関で確認したいことをフォームから送信してください。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={formUrl} external variant="light">
              MR/HPVワクチン接種を相談する
            </CtaLink>
            <CtaLink href="/pilot" variant="light">
              第0期パイロット詳細を見る
            </CtaLink>
            <CtaLink href="/flow" variant="light">
              接種までの流れを見る
            </CtaLink>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading label="References" title="参考情報" align="left">
          <p>
            詳細や最新情報は、公式・専門団体の情報も確認してください。
          </p>
        </SectionHeading>
        <div className="grid gap-3">
          {references.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-sky-100 bg-white p-5 text-base font-semibold leading-7 text-teal-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  );
}
