"use client";

import { AskedQuestions, PackagesCards } from "@Components/Packages";
import PageHeader from "@Components/PageHeader";

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
      <AskedQuestions />
    </div>
  </main>
);

export default Packages;
