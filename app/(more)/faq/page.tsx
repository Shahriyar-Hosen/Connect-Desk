"use client";

import { FAQs, PageHeader } from "@/components";
import { Wrapper } from "@/components/Shared";
import { faqData } from "@/public/Data/faq";

const FAQ = () => (
  <Wrapper className="mb-36">
    <PageHeader
      pageName="Q&A"
      mainTitle="Frequently Asked"
      subTitle={<span className="text-primary">Questions</span>}
    />
    <FAQs data={faqData} />
  </Wrapper>
);

export default FAQ;
