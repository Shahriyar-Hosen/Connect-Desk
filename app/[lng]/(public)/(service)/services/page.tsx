"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { AllServices, CommonText, HeroSection } from "@/components";
import { servicesImg } from "@/public/assets/images";
import { FC } from "react";
import { Trans } from "react-i18next";

const Services: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "services");

  return (
    <main>
      <HeroSection
        mainText={
          <Trans
            i18nKey="heroMainText"
            components={{
              primarySpanTag: <span className="text-primary" />,
              secondarySpanTag: <span className="text-secondary" />,
            }}
            t={t}
          />
        }
        paragraph={<CommonText>{t("heroParagraph")}</CommonText>}
        button2={t("SeeAllServices")}
        image={servicesImg}
        service
        lng={lng}
      />
      <AllServices lng={lng} t={t} />
    </main>
  );
};

export default Services;
