"use client";

import { MainContainer, PageHeader, PolicyContainer } from "@/components";
import { Wrapper } from "@/components/Shared";
import { refundAndReturnPolicyData } from "@/public/Data";
import { FC } from "react";

const PrivacyPolicy: FC = () => (
  <Wrapper>
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
  </Wrapper>
);

export default PrivacyPolicy;
