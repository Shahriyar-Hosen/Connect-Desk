"use client";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  MainContainer,
  PageHeader,
  PolicyContainer,
} from "@/components";

import { privatePolicyData } from "@/public/Data";

const PrivacyPolicy = () => (
  <main>
    <PageHeader
      pageName="Privacy Policy"
      mainTitle={
        <span>
          Privacy <span className="text-primary">Policy</span>
        </span>
      }
    />
    <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto pb-10">
      <MainContainer isRemoveMargin>
        <ComponentHeader
          title={
            <span>
              <ConnectDesk text="lg" /> Privacy Policy
            </span>
          }
        />

        <CommonText className="mt-4">
          Design comps, layouts, wireframes—will your clients accept that you go
          about things the facile way? Authorities in our business will tell in
          no uncertain terms that Lorem Ipsum is that huge, huge no no to
          forswear forever.
        </CommonText>
      </MainContainer>
      {privatePolicyData.map((policy) => (
        <PolicyContainer {...policy} key={policy.title} />
      ))}
    </div>
  </main>
);

export default PrivacyPolicy;
