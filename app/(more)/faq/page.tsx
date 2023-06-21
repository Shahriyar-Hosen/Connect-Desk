"use client";

import FAQs from "@Components/FAQ";
import { faqData } from "@public/Data/faq";

const FAQ = () => (
  <main className="mb-36">
    <FAQs data={faqData} />
  </main>
);

export default FAQ;
