"use client";

import { ContactUsContainer, PageHeader } from "@/components";

const ContactUs = () => (
  <main>
    <PageHeader
      pageName="Contact US"
      mainTitle="Feel Free To Contact"
      subTitle={<span className="text-primary">With Us</span>}
    />
    <ContactUsContainer />
  </main>
);

export default ContactUs;
