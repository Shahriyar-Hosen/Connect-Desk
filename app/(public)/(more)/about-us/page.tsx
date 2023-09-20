"use client";

import {
  Counter,
  CustomerSupport,
  MissionVisionValue,
  PageHeader,
  WhoWeAre,
} from "@/components";

const AboutUs = () => (
  <main>
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
  </main>
);

export default AboutUs;
