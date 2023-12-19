import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n";
import {
  AllFeatures,
  FeaturesHeader,
  FreeTrial,
  PageHeader,
} from "@/components";
import { FC } from "react";

const Features: FC<IIntlParams> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "features");
  return (
    <main>
      <PageHeader
        pageName={t("pageHeader.pageName")}
        mainTitle={t("pageHeader.mainTitle")}
        subTitle={
          <span className="text-primary">{t("pageHeader.subTitle")}</span>
        }
      />
      <FeaturesHeader lng={lng} />
      <AllFeatures lng={lng} />
      <FreeTrial lng={lng} />
    </main>
  );
};

export default Features;
