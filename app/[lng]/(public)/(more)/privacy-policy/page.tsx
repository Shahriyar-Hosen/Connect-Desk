"use client";

import { FC } from "react";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  MainContainer,
  PageHeader,
  PolicyContainer,
} from "@/components";

import { privatePolicyData } from "@/public/Data";
import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { Trans } from "react-i18next";

const PrivacyPolicy: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "privacy-policy"]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "privacy-policy" })}
        mainTitle={
          <span>
            <Trans
              i18nKey="mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"privacy-policy"}
            />
          </span>
        }
      />
      <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto pb-10">
        <MainContainer isRemoveMargin>
          <ComponentHeader
            title={
              <span>
                <ConnectDesk lng={lng} text="lg" />
                {t("PrivacyPolicy", { ns: "privacy-policy" })}
              </span>
            }
          />

          <CommonText className="mt-4">
            {t("introPara", { ns: "privacy-policy" })}
          </CommonText>
        </MainContainer>
        {privatePolicyData.map((policy) => (
          <PolicyContainer {...policy} key={policy.title} t={t} />
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
