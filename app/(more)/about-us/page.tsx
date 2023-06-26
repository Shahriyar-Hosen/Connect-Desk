"use client";

import { WhoWeAre } from "@Components/AboutUs";
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
    <CustomerSupport />
  </main>
);

export default AboutUs;
