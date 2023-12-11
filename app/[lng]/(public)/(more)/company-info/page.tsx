"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { MainContainer, PageHeader } from "@/components";
import { certificate } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next";

const CompanyInfo: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "company-info"]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "company-info" })}
        mainTitle={
          <span>
            <Trans
              i18nKey="mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"company-info"}
            />
          </span>
        }
      />
      <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto">
        <MainContainer isRemoveMargin>
          <div className="text-center text-[16px] md:text-[24px] font-semibold">
            <h3 className="mb-2">
              {t("tradeLicenceNumber", {
                ns: "company-info",
                number: "TRAD/DSCC/674766/2023",
                interpolation: { escapeValue: false },
              })}
            </h3>
            <h3 className="mb-2">
              {t("VATRegistrationNumber", {
                ns: "company-info",
                number: "BIN: 674766-2023",
              })}
            </h3>
            <h3 className="mb-2">
              {t("ETIN", {
                ns: "company-info",
                number: "67567575786",
              })}
            </h3>
          </div>
          <div className="w-full flex justify-center">
            <Image src={certificate} alt="certificate" />
          </div>
        </MainContainer>
      </div>
    </main>
  );
};

export default CompanyInfo;
