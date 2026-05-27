import {
  BulletList,
  ContentSection,
  email,
  InfoCard,
  PageShell,
  SectionHeading,
} from "../_components/site";

export default function PrivacyPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading label="Privacy" title="個人情報の取り扱い">
          <p>
            Googleフォーム等で取得した情報は、本プロジェクトからの連絡、相談内容の確認、協力体制づくり、活動準備のために使用します。
          </p>
        </SectionHeading>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="Googleフォームで取得する情報">
            <BulletList
              items={[
                "氏名または連絡に必要な名前",
                "メールアドレス",
                "相談・応募・協力希望の内容",
                "接種歴や希望するワクチンに関する任意の情報",
                "必要に応じて確認する追加情報",
              ]}
            />
          </InfoCard>
          <InfoCard title="利用目的">
            <BulletList
              items={[
                "相談内容への連絡、確認、日程調整",
                "第0期パイロットの対象確認と運用設計",
                "協力者との連絡、役割調整",
                "活動準備、実績整理、報告資料の作成",
              ]}
            />
          </InfoCard>
          <InfoCard title="匿名化した利用">
            <p>
              取得した情報は、個人が特定されないよう匿名化したうえで、活動設計や報告に使用する可能性があります。個人が特定される形で公開することはありません。
            </p>
          </InfoCard>
          <InfoCard title="診療行為ではないこと">
            <p>
              本プロジェクトは個別の医療相談や接種可否判断を行いません。接種の可否、必要回数、接種間隔、副反応リスクなどは医療機関で相談してください。
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection tone="slate">
        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">
            問い合わせ先
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            個人情報の取り扱いに関する問い合わせは、以下のメールアドレスまでご連絡ください。
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-5 inline-flex text-base font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4"
          >
            {email}
          </a>
        </div>
      </ContentSection>
    </PageShell>
  );
}
