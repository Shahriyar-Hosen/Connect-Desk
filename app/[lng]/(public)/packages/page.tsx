"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { AskedQuestions, PackagesCards, PageHeader } from "@/components";
import { faqData } from "@/public/Data/faq";
import { FC } from "react";
import { Trans } from "react-i18next";

const Packages: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "packages"]);

  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "packages" })}
        mainTitle={
          <Trans
            t={t}
            ns={"packages"}
            i18nKey="mainTitle"
            components={{ spanTag: <span className="text-secondary" /> }}
          />
        }
        subTitle={
          <Trans
            t={t}
            ns={"packages"}
            i18nKey="subTitle"
            components={{ spanTag: <span className="text-primary" /> }}
          />
        }
      />
      <div className="mt-[60px] pb-[50px]">
        <PackagesCards t={t} />
        <AskedQuestions t={t} data={faqData} limit={10} />
      </div>
    </main>
  );
};

export default Packages;
