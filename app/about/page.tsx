import {
  BulletList,
  ContentSection,
  InfoCard,
  PageShell,
  SectionHeading,
} from "../_components/site";

const message = [
  "これまで診療の中で、ワクチンで防げたかもしれない感染症によって重症化し、生活や将来の選択に大きな影響を受ける人を見てきました。",
  "小児期の接種は本人が選べるものではありません。家庭の事情、情報へのアクセス、当時の社会状況によって、接種機会を逃すことがあります。",
  "成人後に本人が接種を希望しても、情報の整理、相談先、費用の壁が重なり、一歩を踏み出しにくい現実があります。",
  "成人キャッチアップ・ワクチン基金は、誰かを責めるためではなく、今から選び直したい人の一歩を社会で支えるために立ち上げる準備プロジェクトです。",
  "遅れても、今から守れる。その選択を支えられる仕組みを、少人数の検証から丁寧に育てていきます。",
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
        <SectionHeading label="Message" title="代表メッセージ" />
        <blockquote className="mx-auto max-w-4xl rounded-lg border border-teal-100 bg-white p-7 shadow-sm sm:p-10">
          <div className="space-y-6 text-base leading-9 text-slate-700 sm:text-lg">
            {message.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-semibold text-slate-900">代表　田中寛顕</p>
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
      </ContentSection>
    </PageShell>
  );
}
