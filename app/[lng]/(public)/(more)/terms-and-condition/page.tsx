"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import {
  ComponentHeader,
  MainContainer,
  PageHeader,
  PolicyContainer,
} from "@/components";
import { termsAndConditionData } from "@/public/Data";
import { FC } from "react";
import { Trans } from "react-i18next";

const TermsAndCondition: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["more", "privacy-policy"]);
  return (
    <main>
      <PageHeader
        pageName={t("termsAndCondition.pageName")}
        mainTitle={
          <span>
            <Trans
              i18nKey="termsAndCondition.mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
            />
          </span>
        }
      />
      <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto ">
        <MainContainer isRemoveMargin>
          <ComponentHeader title="সফটওয়্যার ব্যবহারের শর্তাবলী" />
        </MainContainer>
        {termsAndConditionData.map((terms) => (
          <PolicyContainer
            textPosition="left"
            {...terms}
            key={terms.title}
            t={t}
          />
        ))}
      </div>
    </main>
  );
};
export default TermsAndCondition;
