"use client";

import {
  Counter,
  CustomerSupport,
  MissionVisionValue,
  PageHeader,
  WhoWeAre,
} from "@/components";
import { Wrapper } from "@/components/Shared";

const AboutUs = () => (
  <Wrapper>
    <PageHeader
      mainTitle={
        <>
          About <span className="text-primary">Us</span>
        </>
      }
      pageName="About Us"
    />

    <WhoWeAre />
    <Counter />
    <MissionVisionValue />
    <CustomerSupport />
  </Wrapper>
);

export default AboutUs;
