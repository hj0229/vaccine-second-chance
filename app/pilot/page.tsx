import {
  BulletList,
  ContentSection,
  CtaGroup,
  InfoCard,
  NoticeCard,
  PageShell,
  SectionHeading,
} from "../_components/site";

export default function PilotPage() {
  return (
    <PageShell>
      <ContentSection tone="sky">
        <SectionHeading label="Pilot" title="第0期 MR/HPVワクチン接種相談パイロット">
          <p>
            成人後にMRワクチンまたはHPVワクチンの接種を検討している方を対象に、相談から医療機関での確認、補助判断までの流れを小規模に検証します。
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="第0期パイロット募集">
            <p>
              第0期では、まず5名程度を目安に相談を受け付けます。所定の上限内で原則として接種費用を全額補助する予定ですが、すべての相談者に補助を約束するものではありません。
            </p>
          </InfoCard>
          <InfoCard title="なぜMR/HPVから始めるのか">
            <p>
              MRは国内で麻しん報告が増加している状況を受け、成人後でも接種歴が不明な方や2回接種を完了していない可能性がある方が医療機関で相談しやすい導線をつくるため、HPVは過去の情報不足や接種控えの影響で機会を逃した方が本人の意思で検討できる導線を検証するために対象とします。
            </p>
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard title="第0期パイロットの目的">
            <BulletList
              items={[
                "接種を希望する方が医療機関で相談しやすくなる流れを検証すること",
                "接種歴や希望内容の整理、相談先へのつなぎ方を確認すること",
                "将来の継続的な支援に向けて、補助条件や運用手順を整えること",
              ]}
            />
          </InfoCard>
          <InfoCard title="募集対象">
            <BulletList
              items={[
                "小児期・思春期にMRワクチンまたはHPVワクチンの接種機会を逃し、成人後に本人の意思で接種を検討している方",
                "接種歴、希望内容、相談状況について確認に協力できる方",
                "必要に応じて医療機関で接種可否を相談できる方",
              ]}
            />
          </InfoCard>
          <InfoCard title="補助方針">
            <BulletList
              items={[
                "第0期では、まず5名程度を目安に、所定の上限内で原則として接種費用を全額補助する予定です",
                "補助は対象条件、予算上限、医療機関での接種可否確認、領収書・接種記録の確認を踏まえて個別に判断します",
                "原則として、補助対象はワクチン接種費用本体を想定しています",
                "診察料、抗体検査費、文書料、交通費などを含めるかどうかは個別に判断します",
                "すべての相談者に補助を約束するものではありません",
              ]}
            />
          </InfoCard>
          <InfoCard title="相談できること">
            <BulletList
              items={[
                "接種歴がわからない",
                "医療機関で何を相談すればよいかわからない",
                "費用が不安",
                "領収書や接種記録の提出方法を知りたい",
                "MR/HPVのどちらを相談すればよいかわからない",
              ]}
            />
          </InfoCard>
          <InfoCard title="対象外・注意点">
            <BulletList
              items={[
                "本プロジェクトは診療行為や接種可否判断を行いません",
                "接種の可否、接種するワクチンの種類、必要回数、接種間隔、副反応リスクは医療機関で相談してください",
                "相談内容や確認書類の状況によっては補助対象外となる場合があります",
              ]}
            />
          </InfoCard>
        </div>
      </ContentSection>

      <ContentSection tone="slate">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <InfoCard title="応募後の流れ">
            <BulletList
              items={[
                "Googleフォームから相談内容を送信してください",
                "内容を確認し、必要に応じてメールで追加確認やオンライン相談の日程調整を行います",
                "医療機関で接種可否を確認したうえで、対象条件や必要書類を踏まえて補助可否を判断します",
              ]}
            />
          </InfoCard>
          <InfoCard title="第0期パイロットへの関わり方">
            <p>
              相談者としての応募に加え、医療、会計、法務・個人情報保護、Web・広報などの観点から運営に協力できる方も受け付けています。
            </p>
            <div className="mt-6">
              <CtaGroup includePilot={false} />
            </div>
          </InfoCard>
        </div>
        <div className="mt-6">
          <NoticeCard />
        </div>
      </ContentSection>
    </PageShell>
  );
}
