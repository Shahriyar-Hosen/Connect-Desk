"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { MainContainer, PageHeader, PolicyContainer } from "@/components";
import { refundAndReturnPolicyData } from "@/public/Data";
import { FC } from "react";

const PrivacyPolicy: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, [
    "common",
    "refund-policy",
    "privacy-policy",
  ]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "refund-policy" })}
        mainTitle={t("mainTitle", { ns: "refund-policy" })}
        subTitle={
          <span className="text-primary">
            {t("subTitle", { ns: "refund-policy" })}
          </span>
        }
      />
      <MainContainer isRemoveMargin>
        <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto">
          {refundAndReturnPolicyData.map((policy) => (
            <PolicyContainer {...policy} key={policy.title} t={t} />
          ))}
        </div>
      </MainContainer>
    </main>
  );
};

export default PrivacyPolicy;
