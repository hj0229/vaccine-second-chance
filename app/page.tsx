const formUrl = "https://forms.gle/gRzb4GDZGFuQtowT7";
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
    title: "成人MRワクチン・キャッチアップ支援",
    description:
      "小児期・思春期にMRワクチンを2回接種する機会を逃し、成人後に本人の意思で接種を希望する方への費用補助を小規模に始めることを目指します。",
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

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 sm:text-base ${className}`}
    >
      協力者として関心を伝える
    </a>
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
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaButton />
              <p className="text-sm leading-7 text-slate-500">
                寄付受付・接種費用補助の申請受付は、現時点では開始していません。
              </p>
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
              麻疹の国内報告が増加している状況を踏まえ、本基金では、まず成人MRワクチン・キャッチアップ支援から小規模に開始することを検討しています。小児期・思春期にMRワクチンを2回接種する機会を逃し、成人後に本人の意思で接種を希望する方のうち、医療機関で接種適応を確認したうえで、費用負担が障壁となっている方を支えることを目指します。
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
              費用補助だけでなく、接種を希望する方が医療機関で相談しやすくなるよう、接種歴・既往歴・希望するワクチンを整理した「キャッチアップ接種相談シート」の作成支援も検討しています。MRワクチンでの小規模な運用を整えたうえで、将来的にはHPVワクチンなど他のワクチンへの支援拡大も検討します。
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

      <section className="bg-teal-800 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal-100 uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-teal-50 sm:text-lg">
            協力に関心のある方は、Googleフォームからご連絡ください。メールでのお問い合わせも受け付けています。
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5">
            <CtaButton className="bg-white text-teal-800 shadow-none hover:bg-teal-50 focus-visible:outline-white" />
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
