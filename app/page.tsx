const formUrl = "https://forms.gle/1aEDxBHTyjaXoR4C8";
const email = "info@vaccine-second-chance.org";

const policies = [
  "接種を強制しない",
  "特定の保護者や家庭を非難しない",
  "本人の自己決定を支える",
  "医学的判断は医療機関で行う",
  "寄付金の使途を透明化する",
  "個人情報を慎重に扱う",
];

const supporters = [
  {
    title: "医療者",
    description: "小児科、産婦人科、感染症、公衆衛生などの観点から助言いただける方",
  },
  {
    title: "会計に詳しい方",
    description: "寄付金管理、収支報告、透明性確保について相談できる方",
  },
  {
    title: "法務・個人情報保護に詳しい方",
    description: "申請フォーム、同意文書、個人情報管理について確認いただける方",
  },
  {
    title: "Web・広報に協力できる方",
    description: "サイト改善、SNS、説明資料作成に協力いただける方",
  },
];

const referenceLinks = [
  {
    label: "厚生労働省：麻しんについて",
    href: "https://www.mhlw.go.jp/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/measles/index.html",
  },
  {
    label: "厚生労働省：MRワクチンについて",
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou03/index_00002.html",
  },
  {
    label: "JIHS：麻しんとは",
    href: "https://id-info.jihs.go.jp/diseases/a/measles/010/measles-intro.html",
  },
  {
    label: "厚生労働省：予防接種情報",
    href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou/yobou-sesshu/index.html",
  },
  {
    label: "日本小児科学会：予防接種情報",
    href: "https://www.jpeds.or.jp/general/prevention/40005.html",
  },
  {
    label: "WHO：Immunization",
    href: "https://www.who.int/immunization/en/",
  },
];

const firstStepItems = [
  {
    title: "成人MR/HPVワクチン・キャッチアップ支援",
    description:
      "小児期・思春期にMRワクチンまたはHPVワクチンの接種機会を逃し、成人後に本人の意思で接種を希望する方への相談導線づくりを小規模に始めます。",
  },
  {
    title: "透明な運営体制づくり",
    description:
      "寄付金管理、個人情報保護、補助対象者の選定方法を整え、透明性のある形で開始します。",
  },
  {
    title: "医療機関相談への接続",
    description:
      "接種歴や希望内容を整理し、医療機関で接種可否や必要回数を相談しやすくする仕組みを整えます。",
  },
];

const futureSupportItems = [
  {
    title: "接種歴の整理",
    description:
      "母子手帳、接種記録、海外での接種歴などを整理し、医療機関で相談しやすい形にまとめます。",
  },
  {
    title: "相談用情報整理",
    description:
      "年齢、接種歴、希望するワクチンをもとに、医療機関で相談するための情報を整理します。",
  },
  {
    title: "費用補助への接続",
    description:
      "医療機関で接種可否や必要回数が確認された後、条件に応じて費用補助につなげる仕組みを目指します。",
  },
];

const pilotDetails = [
  {
    title: "0期パイロットの目的",
    items: [
      "成人MRワクチンまたはHPVワクチンのキャッチアップ接種を希望する方が、医療機関で相談しやすくなる流れを小規模に検証します。",
      "接種歴や希望内容の整理、相談先へのつなぎ方、将来的な費用補助の運用条件を確認します。",
    ],
  },
  {
    title: "募集対象",
    items: [
      "小児期・思春期にMRワクチンまたはHPVワクチンの接種機会を逃し、成人後に本人の意思で接種を検討している方。",
      "医療者、広報、会計、法務・個人情報保護などの観点から、月1回程度の資料確認や相談に協力できる方。",
    ],
  },
  {
    title: "対象外・注意点",
    items: [
      "本サイトは診断・接種可否の医学的判断を行うものではありません。",
      "実際の接種可否、必要回数、接種間隔、抗体検査の要否は医療機関で相談してください。",
      "現時点では寄付受付・接種費用補助申請は準備中です。",
    ],
  },
  {
    title: "応募後の流れ",
    items: [
      "Googleフォームまたはメールで関心内容を送ってください。",
      "内容を確認し、必要に応じてメールで追加確認やオンライン相談の日程調整を行います。",
      "0期では、個別支援を確約するのではなく、支援体制を整えるための事前確認から始めます。",
    ],
  },
];

const representativeMessage = [
  "私は都内の病院で働く小児科医です。",
  "これまで診療の中で、ワクチンで防げたかもしれない感染症によって重症化し、命の危険にさらされる子どもたちを見てきました。",
  "そのたびに、保護者の方に予防接種の大切さを伝えてきました。しかし、さまざまな不安や事情の中で、接種に至らないまま成長する子どもたちがいる現状もあります。",
  "親御さんの選択は、子どものことを想い、悩み、たくさん調べたうえでの決断であることも少なくありません。その心配の気持ちを、私は否定したいわけではありません。",
  "子どもは、自分で予防接種を受けるかどうかを決めることができません。家庭の方針、情報、環境によって、接種の機会を失うことがあります。",
  "ワクチンで防げたかもしれない感染症が、重症化することもあります。また将来、その子が留学を考えたとき、医療・福祉・教育などの職場を選ぶとき、あるいは自分や周囲の健康を守りたいと思ったときに、過去の未接種が選択肢を狭めることがあります。",
  "では、その子たちが大人になり、自分の意思で「今から接種したい」と思ったとき、社会はその選択を支えられているでしょうか。",
  "成人後のキャッチアップ接種は、公費助成の対象外となることも多く、高額な自己負担が壁になることがあります。",
  "成人キャッチアップワクチン基金は、そうした人たちが、自分の健康を自分で守ろうとする一歩を支えるために立ち上げる準備プロジェクトです。",
  "この活動は、誰かを責めるためのものではありません。子どもの頃には選べなかった人が、大人になって選び直せる社会をつくるためのものです。",
  "遅れても、今から守れる。その一歩を、社会で支えたいと思っています。",
  "田中寛顕",
];

function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function CtaLink({
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

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-base ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

function CtaGroup({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <CtaLink href={formUrl} external variant={inverted ? "light" : "primary"}>
        MR/HPVワクチン接種を相談する
      </CtaLink>
      <CtaLink href={formUrl} external variant={inverted ? "light" : "secondary"}>
        医療者・広報・会計などで協力する
      </CtaLink>
      <CtaLink href={`mailto:${email}`} variant={inverted ? "light" : "secondary"}>
        問い合わせる
      </CtaLink>
    </div>
  );
}

function CtaNotice({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      className={`rounded-lg border p-5 text-sm leading-7 ${
        inverted
          ? "border-teal-300/50 bg-teal-900/20 text-teal-50"
          : "border-teal-100 bg-white/80 text-slate-600"
      }`}
    >
      <p>本サイトは診断・接種可否の医学的判断を行うものではありません。</p>
      <p>実際の接種可否は医療機関で相談してください。</p>
      <p>現時点では寄付受付・接種費用補助申請は準備中です。</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300" />
        <div className="mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-800 shadow-sm">
              任意団体化準備中の個人プロジェクト
            </p>
            <h1 className="mt-8 text-4xl font-semibold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              <span className="block">成人キャッチアップ</span>
              <span className="block">ワクチン基金</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-600 sm:text-2xl">
              Vaccine Second Chance Fund Japan
            </p>
            <p className="mt-10 text-3xl font-semibold text-teal-800 sm:text-5xl">
              遅れても、今から守れる。
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-700 sm:text-xl">
              本人の意思によらず予防接種の機会を逃した人が、成人後に自分の意思で接種を希望したとき、その一歩を社会で支える仕組みを準備しています。
            </p>
            <p className="mt-5 max-w-3xl rounded-lg border border-teal-100 bg-white/80 p-5 text-base leading-8 text-slate-700 shadow-sm sm:text-lg">
              第0期では、MRワクチン・HPVワクチンの接種機会を逃した成人の方から、小規模に相談を受け付けています。
            </p>
            <div className="mt-10 space-y-5">
              <CtaGroup />
              <CtaNotice />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="About" title="このプロジェクトについて">
            <p>
              小児期・思春期に、本人の意思によらず予防接種の機会を逃した人が、成人後に自分の意思で接種を希望したとき、情報・相談先・費用の壁を少しでも下げるための準備プロジェクトです。
            </p>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "現在は任意団体化準備中であり、運営体制づくりを進めています。",
              "成人後に接種を希望する本人の自己決定を支える活動です。",
              "医学的判断は医療機関で行う必要があることを前提にしています。",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-sky-100 bg-sky-50/60 p-6 text-base leading-8 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Pilot 0" title="0期パイロット募集">
            <p>
              第0期では、MRワクチン・HPVワクチンの接種機会を逃した成人の方から、小規模に相談を受け付けています。公開募集として支援を始める前に、少人数の関心登録と協力者の助言をもとに、相談導線、個人情報の扱い、将来的な費用補助の運用を確認する段階です。
            </p>
          </SectionHeading>
          <div className="mb-8 rounded-lg border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              なぜMR/HPVから始めるのか
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-700">
              MRワクチンは、国内で麻しん報告が増加している状況を受け、接種歴が不明な方や2回接種を完了していない可能性がある成人が、医療機関で相談しやすくなる導線を作るために対象とします。HPVワクチンは、過去の情報不足や接種控えの影響で接種機会を逃した方が、成人後に本人の意思で接種を検討できるようにするために対象とします。そのため第0期では、まずMRワクチン・HPVワクチンから相談導線を検証します。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {pilotDetails.map((detail) => (
              <div
                key={detail.title}
                className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {detail.title}
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-8 text-slate-700">
                  {detail.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-teal-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              0期パイロットへの関わり方
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-700">
              相談・支援対象候補としての関心登録、医療者・広報・会計などでの協力、一般的な問い合わせを分けて受け付けています。Googleフォームは同じURLを使用し、内容を確認してこちらから連絡します。
            </p>
            <div className="mt-6 space-y-5">
              <CtaGroup />
              <CtaNotice />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="Message" title="代表メッセージ" />
          <blockquote className="rounded-lg border border-teal-100 bg-white p-7 shadow-sm sm:p-10">
            <div className="space-y-6 text-base leading-9 text-slate-700 sm:text-lg">
              {representativeMessage.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </blockquote>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Why" title="なぜ必要か" />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "ワクチンで防げる感染症でも、未接種のままでは重症化することがあります。",
              "留学、就職、医療・福祉・教育分野での実習や勤務など、将来の選択肢に関わることがあります。",
              "成人後に本人が接種を希望しても、公費助成の対象外となり、自己負担が壁になることがあります。",
              "情報、費用、相談先の不足が、「今から接種したい」という意思を妨げることがあります。",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-50 to-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="First Step" title="最初に目指すこと">
            <p>
              国内で麻しん報告が増加している状況を受け、接種歴が不明な方やMRワクチンの2回接種を完了していない可能性がある成人が、医療機関で相談しやすくなる導線を作ります。あわせて、過去の情報不足や接種控えの影響でHPVワクチンの接種機会を逃した方が、成人後に本人の意思で接種を検討できる相談導線を検証します。
            </p>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {firstStepItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-emerald-100 bg-white/85 p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-emerald-100 bg-white/85 p-5 text-sm leading-7 text-slate-600">
            本プロジェクトは、定期接種対象児への接種機会を妨げないことを前提に進めます。団体が診療行為や個別の接種可否判断を行うわけではありません。接種の可否、接種するワクチンの種類、接種間隔、抗体検査の要否などについては、必ず医療機関で相談してください。
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Future Support" title="将来的に目指す支援">
            <p>
              費用補助だけでなく、接種を希望する方が医療機関で相談しやすくなるよう、接種歴・既往歴・希望するワクチンを整理した「キャッチアップ接種相談シート」の作成支援も検討しています。第0期ではMRワクチン・HPVワクチンで小規模な相談導線を整え、将来的には他のワクチンへの支援拡大も検討します。
            </p>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {futureSupportItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            本プロジェクトは診療行為を行うものではありません。接種の可否、接種するワクチンの種類、接種間隔、抗体検査の要否、副反応リスクについては、必ず医療機関で相談してください。
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Policy" title="大切にする方針" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy) => (
              <div
                key={policy}
                className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-900">{policy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Collaborators" title="現在募集している協力者">
            <p>
              現在は、月1回程度の資料確認・相談参加を想定しています。小さく始め、医学的妥当性、会計の透明性、個人情報保護を整えながら進めます。
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supporters.map((supporter) => (
              <div
                key={supporter.title}
                className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {supporter.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {supporter.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">
              Donation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
              寄付について
            </h2>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>現在、寄付受付は準備中です。</p>
              <p>
                会計管理、個人情報保護、補助対象者の選定方法を整備したうえで、小規模に開始する予定です。
              </p>
              <p>
                現時点では接種費用補助の申請も受け付けていません。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="References" title="根拠・参考情報">
            <p>
              本プロジェクトは、医学的判断を代替するものではありません。予防接種の可否、接種するワクチンの種類、接種間隔、副反応リスクについては、医療機関で相談する必要があります。公開情報は、厚生労働省、日本小児科学会、WHOなどの公的・専門機関の情報を参考に、今後整備していきます。
            </p>
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-3">
            {referenceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-white p-6 text-base font-semibold leading-7 text-teal-800 shadow-sm transition hover:border-teal-200 hover:bg-teal-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="Privacy" title="個人情報の取り扱いについて" />
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                フォームに入力いただいたお名前、メールアドレス、ご所属、関心内容などの情報は、本プロジェクトからの連絡、協力体制づくり、活動準備のためにのみ使用します。
              </p>
              <p>
                取得した情報を、本人の同意なく第三者に提供することはありません。
              </p>
              <p>
                なお、本プロジェクトは現在準備段階であり、個別の医療相談、接種可否の判断、接種費用補助の申請受付は行っていません。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-800 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal-100 uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-teal-50 sm:text-lg">
            相談・支援対象候補としての関心登録、医療者・広報・会計などでの協力、その他のお問い合わせを受け付けています。
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5">
            <CtaGroup inverted />
            <CtaNotice inverted />
            <a
              href={`mailto:${email}`}
              className="text-base font-semibold text-white underline decoration-teal-200 underline-offset-4"
            >
              {email}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 成人キャッチアップワクチン基金 / Vaccine Second Chance Fund
        Japan
      </footer>
    </main>
  );
}
