"use client";

import { MainContainer, PageHeader, PolicyContainer } from "@/components";
import { refundAndReturnPolicyData } from "@/public/Data";

const PrivacyPolicy = () => (
  <main>
    <PageHeader
      pageName="Refund And Return Policy"
      mainTitle="Refund And Return"
      subTitle={<span className="text-primary">Policy</span>}
    />
    <MainContainer isRemoveMargin>
      <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto">
        {refundAndReturnPolicyData.map((policy) => (
          <PolicyContainer {...policy} key={policy.title} />
        ))}
      </div>
    </MainContainer>
  </main>
);

export default PrivacyPolicy;
