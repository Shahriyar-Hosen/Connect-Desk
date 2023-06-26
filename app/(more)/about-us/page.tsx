"use client";

import { CustomerSupport } from "@Components/Common";
import PageHeader from "@Components/PageHeader";

const AboutUs = () => {
  return (
    <main>
      <PageHeader
        mainTitle={
          <>
            About <span className="text-primary">Us</span>
          </>
        }
        pageName="About Us"
      />

      <CustomerSupport />
    </main>
  );
};

export default AboutUs;
