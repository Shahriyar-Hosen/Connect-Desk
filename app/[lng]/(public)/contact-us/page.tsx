"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { ContactUsContainer, PageHeader } from "@/components";
import { FC } from "react";

const ContactUs: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "contact-us");
  return (
    <main>
      <PageHeader
        pageName={t("pageName")}
        mainTitle={t("mainTitle")}
        subTitle={<span className="text-primary">{t("subTitle")}</span>}
      />
      <ContactUsContainer t={t} />
    </main>
  );
};

export default ContactUs;
