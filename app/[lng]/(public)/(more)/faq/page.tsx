"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { FAQs, PageHeader } from "@/components";
import { faqData } from "@/public/Data/faq";
import { FC } from "react";

const FAQ: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "common");
  return (
    <main className="mb-36">
      <PageHeader
        pageName="Q&A"
        mainTitle="Frequently Asked"
        subTitle={<span className="text-primary">Questions</span>}
      />
      <FAQs t={t} data={faqData} />
    </main>
  );
};

export default FAQ;
