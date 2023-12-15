"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import {
  AboutHome,
  CommonText,
  ConnectDesk,
  FreeTrial,
  HeroSection,
  ImportantFeatures,
  Packages,
  PerfectSolution,
  Support,
} from "@/components";
import { heroLaptop } from "@/public/assets/images";
import { FC } from "react";

const Home: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "index");
  return (
    <main>
      <HeroSection
        mainText={t("heroSection.mainText")}
        subText={<ConnectDesk lng={lng} text="xl" />}
        paragraph={<CommonText>{t("heroSection.commonText")}</CommonText>}
        image={heroLaptop}
        button1={t("heroSection.buttonOneLevel")}
        button2={t("heroSection.buttonTwoLevel")}
      />

      <AboutHome lng={lng} t={t} />
      <PerfectSolution t={t} />
      <ImportantFeatures lng={lng} t={t} />
      <Packages t={t} />
      <Support lng={lng} t={t} />
      <FreeTrial lng={lng} />
    </main>
  );
};

export default Home;
