"use client";

import { FC } from "react";
import { Trans } from "react-i18next";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import {
  AfterSalesSupport,
  AskedQuestions,
  CommonText,
  CustomerSupport,
  GrowRetailFaster,
  HeroSection,
  Packages,
  SoftwareFeatures,
  TermCondition,
} from "@/components";
import { faqData } from "@/public/Data/faq";
import { posInventoryService } from "@/public/assets/images";

const POSInventoryService: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "services", "packages"]);

  return (
    <main>
      <HeroSection
        mainText={
          <Trans
            i18nKey="POSSoftware.heroMainText"
            components={{
              spanTagPrimary: <span className="text-primary" />,
              spanTagSecondary: <span className="text-secondary" />,
            }}
            t={t}
            ns={"services"}
          />
        }
        paragraph={
          <CommonText>
            <Trans
              i18nKey="POSSoftware.heroPara"
              components={{
                strong: <strong />,
              }}
              t={t}
              ns={"services"}
            />
          </CommonText>
        }
        button1={t("POSSoftware.viewDemo", { ns: "services" })}
        button2={t("POSSoftware.proposal", { ns: "services" })}
        image={posInventoryService}
        lng={lng}
        pos
      />

      <SoftwareFeatures t={t} lng={lng} />
      <GrowRetailFaster lng={lng} t={t} />
      <Packages t={t} />
      <TermCondition t={t} />
      <AfterSalesSupport lng={lng} t={t} />
      <CustomerSupport lng={lng} t={t} />
      <AskedQuestions t={t} data={faqData} limit={5} />
    </main>
  );
};

export default POSInventoryService;
