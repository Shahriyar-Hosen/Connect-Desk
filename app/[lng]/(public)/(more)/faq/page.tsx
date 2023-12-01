"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { FAQs, PageHeader } from "@/components";
import { faqData } from "@/public/Data/faq";
import { FC } from "react";

const FAQ: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "more"]);
  return (
    <main className="mb-36">
      <PageHeader
        pageName={t("faq.pageName", { ns: "more" })}
        mainTitle={t("faq.mainTitle", { ns: "more" })}
        subTitle={
          <span className="text-primary">
            {t("faq.questions", { ns: "more" })}
          </span>
        }
      />
      <FAQs t={t} data={faqData} />
    </main>
  );
};

export default FAQ;
