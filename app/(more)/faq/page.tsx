"use client";

import { FAQs, PageHeader } from "@/components";
import { faqData } from "@/public/Data/faq";

const FAQ = () => (
  <main className="mb-36">
    <PageHeader
      pageName="Q&A"
      mainTitle="Frequently Asked"
      subTitle={<span className="text-primary">Questions</span>}
    />
    <FAQs data={faqData} />
  </main>
);

export default FAQ;
