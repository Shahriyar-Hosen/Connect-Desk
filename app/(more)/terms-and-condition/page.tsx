"use client";

import {
  ComponentHeader,
  MainContainer,
  PageHeader,
  PolicyContainer,
} from "@/components";
import { Wrapper } from "@/components/Shared";
import { termsAndConditionData } from "@/public/Data";
import { FC } from "react";

const PrivacyPolicy: FC = () => (
  <Wrapper>
    <PageHeader
      pageName="Terms And Conditions"
      mainTitle={
        <span>
          Terms And <span className="text-primary">Conditions</span>
        </span>
      }
    />
    <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto ">
      <MainContainer isRemoveMargin>
        <ComponentHeader title="সফটওয়্যার ব্যবহারের শর্তাবলী" />
      </MainContainer>
      {termsAndConditionData.map((terms) => (
        <PolicyContainer textPosition="left" {...terms} key={terms.title} />
      ))}
    </div>
  </Wrapper>
);
export default PrivacyPolicy;
