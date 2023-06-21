"use client";

import FAQs from "@Components/FAQ";
import PageHeader from "@Components/PageHeader";
import { faqData } from "@public/Data/faq";

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
