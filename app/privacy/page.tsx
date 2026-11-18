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
                "メールアドレス、任意の電話番号",
                "生年月日、性別、居住都道府県（フォームで任意となっている項目は回答を省略できます）",
                "相談・応募・協力希望の内容",
                "接種歴、希望するワクチン、費用面の悩み",
                "妊娠の可能性や今後の性的パートナーに関する任意回答など、健康や私生活に関わる情報",
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
                "費用補助の条件確認と、必要になった段階での領収書・接種記録の確認",
                "個人が特定されない形での活動設計、助成申請、実績整理、報告資料の作成",
              ]}
            />
          </InfoCard>
          <InfoCard title="匿名化した利用">
            <p>
              活動設計・助成申請・報告には、個人が特定されないよう集計・加工した情報を使用する場合があります。少人数であることも踏まえ、氏名・連絡先だけでなく、年齢・地域・相談内容の組み合わせから本人が推測されないよう配慮します。
            </p>
          </InfoCard>
          <InfoCard title="管理方法と第三者提供">
            <BulletList
              items={[
                "取得した情報は、Googleフォームおよび関連スプレッドシートで管理します",
                "アクセス権限を限定して管理します",
                "本人から削除・訂正希望があった場合、合理的な範囲で対応します",
                "法令に基づく場合を除き、本人の同意なく個人が特定される情報を第三者提供しません",
              ]}
            />
          </InfoCard>
          <InfoCard title="回答は必要な範囲で">
            <p>生年月日や健康・私生活に関する項目など、フォームで任意となっている質問は回答を省略できます。初回の相談では、詳しい病歴や書類を送る必要はありません。補助の確認に書類が必要になった場合は、提出方法を別途ご案内します。</p>
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

