import {
  BulletList,
  ContentSection,
  CtaLink,
  email,
  formUrl,
  InfoCard,
  PageShell,
  SectionHeading,
} from "../_components/site";

export default function SupportPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading label="Support" title="協力者募集・寄付について">
          <p>
            第0期パイロットを小規模に進めながら、医療、会計、法務・個人情報保護、Web・広報の観点から協力できる方を募集しています。
          </p>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "医療者",
              text: "小児科、産婦人科、感染症、公衆衛生などの観点から助言いただける方。",
              tasks: "相談フロー、注意書き、医療機関へ確認すべき事項のレビュー",
            },
            {
              title: "会計に詳しい方",
              text: "会計管理、収支報告、透明性のある運用について相談できる方。",
              tasks: "補助金支払い記録、領収書管理、活動報告の確認",
            },
            {
              title: "法務・個人情報保護に詳しい方",
              text: "申請フォーム、同意文書、個人情報管理について確認いただける方。",
              tasks: "フォーム文言、同意文、個人情報管理方法の確認",
            },
            {
              title: "Web・広報に協力できる方",
              text: "サイト改善、SNS、説明資料づくりに協力いただける方。",
              tasks: "サイト改善、公式X、説明資料作成",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                想定タスク
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.tasks}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading label="Donation" title="寄付について" align="left">
            <p>
              寄付受付は現在準備中です。受付方法や報告方法が整い次第、公式Xと本サイトでお知らせします。
            </p>
          </SectionHeading>
          <InfoCard title="第0期で検討している補助">
            <BulletList
              items={[
                "第0期では少人数を対象に、所定の上限内で原則として接種費用を全額補助する予定です",
                "すべての相談者に補助を約束するものではありません",
                "対象条件、医療機関での接種可否確認、領収書・接種記録の確認を踏まえて個別に判断します",
              ]}
            />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection tone="slate">
        <div className="rounded-lg border border-teal-100 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">
            協力を希望する方へ
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
            相談者としての応募、専門的な協力、一般的な問い合わせはいずれも受け付けています。フォームまたはメールからご連絡ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={formUrl} external>
              Googleフォームで連絡する
            </CtaLink>
            <CtaLink href={`mailto:${email}`} variant="secondary">
              メールで問い合わせる
            </CtaLink>
          </div>
        </div>
      </ContentSection>
    </PageShell>
  );
}
