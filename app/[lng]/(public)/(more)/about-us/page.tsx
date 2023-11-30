"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import {
  Counter,
  CustomerSupport,
  MissionVisionValue,
  PageHeader,
  WhoWeAre,
} from "@/components";
import { FC } from "react";
import { Trans } from "react-i18next";

const AboutUs: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "about-us");
  return (
    <main>
      <PageHeader
        mainTitle={
          <>
            <Trans
              i18nKey="pageTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
            />
          </>
        }
        pageName={t("pageName")}
      />

      <WhoWeAre t={t} />
      <Counter t={t} />
      <MissionVisionValue t={t} />
      <CustomerSupport t={t} />
    </main>
  );
};

export default AboutUs;