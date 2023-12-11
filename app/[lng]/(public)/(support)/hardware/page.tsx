"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { HardwareContainer, PageHeader } from "@/components";
import { FC } from "react";

const Hardware: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "hardware"]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "hardware" })}
        mainTitle={t("pageName", { ns: "hardware" })}
      />
      <HardwareContainer lng={lng} />
    </main>
  );
};

export default Hardware;
