import {
  BulletList,
  ContentSection,
  InfoCard,
  PageShell,
  SectionHeading,
  CtaGroup,
  email,
} from "../_components/site";

const messageIntro = [
  "「予防接種は打ちません。なぜなら……」",
  "小児科外来で、ときどきこのような言葉を聞きます。",
  "小児科医として、私はできる限り丁寧に、ワクチンの必要性を説明します。それでも最終的に、「打たない」という判断になることも少なくありません。",
  "親御さんが、子どものことを思い、調べ、悩み、考えて出した結論です。医療者として、接種を強制することはできません。",
  "そして私たちは、親御さんの思いやその選択を責めたいわけではありません。",
  "では、その子自身が大人になったときはどうでしょうか。",
  "たとえば、",
];

const messageExamples = [
  "留学したいと思ったときに、必要な予防接種を受けていない",
  "医療職など、ワクチン接種が求められる職業に進みにくい",
  "将来、自分や家族が、ワクチンで防げた病気のリスクに向き合うことになる",
];

const messageClosing = [
  "子どもの頃に受けなかった予防接種が、大人になった本人の選択肢や可能性に影響することがあります。",
  "そして成人になり、自分の意思で「今からワクチンを受けたい」と思ったとき、多くの場合、その接種は自費になります。",
  "成人キャッチアップワクチン基金は、過去の判断を否定するためではなく、今から選び直したい人の一歩を、社会で支えるための準備プロジェクトです。",
  "遅れても、今から守れる。打てなかった過去を責めるのではなく、これから守れる未来を、もう一度つくる。その選択を支えられる仕組みを、まずは少人数の検証から、丁寧に育てていきます。",
];

export default function AboutPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading label="About" title="このプロジェクトについて">
          <p>
            本人の意思によらず予防接種の機会を逃した人が、成人後に自分の意思で接種を検討できるよう、情報整理、相談先への接続、費用補助の仕組みづくりを進めています。
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "本人の自己決定を支える活動です。",
            "医療機関での相談を前提に、情報と手続きを整理します。",
            "透明性のある運用体制を整えながら小さく始めます。",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-sky-100 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection tone="slate">
        <SectionHeading as="h2" label="Message" title="代表メッセージ" />
        <blockquote className="mx-auto max-w-4xl rounded-lg border border-teal-100 bg-white p-7 shadow-sm sm:p-10">
          <div className="space-y-6 text-base leading-9 text-slate-700 sm:text-lg">
            {messageIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="space-y-3 pl-6">
              {messageExamples.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
            {messageClosing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="pt-2 text-sm font-medium text-slate-500 sm:text-base">
              代表　田中寛顕 / 小児科専門医
            </p>
          </div>
        </blockquote>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="活動方針">
            <BulletList
              items={[
                "接種を強制しない",
                "特定の保護者や家庭を非難しない",
                "本人の自己決定を支える",
                "医学的判断は医療機関で行う",
                "運用の透明性を大切にする",
                "個人情報を慎重に扱う",
              ]}
            />
          </InfoCard>
          <InfoCard title="なぜ必要か">
            <BulletList
              items={[
                "接種機会を逃したまま成人すると、本人の意思だけでは情報や費用の壁を越えにくいことがあります",
                "感染症による健康上の影響は、進学、就職、医療・福祉・教育などの将来選択にも関わる場合があります",
                "接種で得られる利益や注意点は、ワクチンの種類と本人の接種歴・状況によって異なります。根拠を確認し、医療機関で相談できるよう支えます",
                "本人が今から接種を検討したいと思ったときに、相談できる導線が必要です",
              ]}
            />
          </InfoCard>
          <InfoCard title="大切にする方針">
            <BulletList
              items={[
                "責めるのではなく、今からの選択を支えること",
                "小さく始め、実績と課題を公開しながら改善すること",
                "医療、会計、法務・個人情報保護などの協力者とともに運用すること",
              ]}
            />
          </InfoCard>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600">MR・HPVの効果と注意点、参考資料は、<a href="/vaccines" className="underline underline-offset-4">ワクチンについて</a>にまとめています。</p>
      </ContentSection>
      <ContentSection tone="slate">
        <InfoCard title="運営について">
          <p>運営：成人キャッチアップワクチン基金 / Vaccine Second Chance Fund Japan 設立準備プロジェクト</p>
          <p>代表：田中寛顕（小児科専門医）</p>
          <p>現在は少人数の事前相談を通じて、支援の仕組みを整える準備段階です。寄付受付は準備中です。</p>
          <p>お問い合わせ：<a className="break-all underline underline-offset-4" href={`mailto:${email}`}>{email}</a></p>
        </InfoCard>
        <div className="mt-6"><CtaGroup /></div>
      </ContentSection>
    </PageShell>
  );
}

