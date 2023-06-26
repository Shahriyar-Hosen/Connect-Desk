"use client";

import { MissionVisionValue, WhoWeAre } from "@Components/AboutUs";
import { CustomerSupport } from "@Components/Common";
import PageHeader from "@Components/PageHeader";

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
    <MissionVisionValue />
    <CustomerSupport />
  </main>
);

export default AboutUs;
