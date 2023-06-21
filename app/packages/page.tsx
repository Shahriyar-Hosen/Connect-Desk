"use client";

import { AskedQuestions } from "@Components/Common";
import { PackagesCards } from "@Components/Packages";
import PageHeader from "@Components/PageHeader";
import { faqData } from "@public/Data/faq";

const Packages = () => (
  <main>
    <PageHeader
      pageName="Pricing Plans"
      mainTitle="Choose The Right Plan For"
      subTitle={
        <>
          Your <span className="text-primary">Business</span>
        </>
      }
    />
    <div className="mt-[60px] pb-[50px]">
      <PackagesCards />
      <AskedQuestions data={faqData} limit={10} />
    </div>
  </main>
);

export default Packages;
