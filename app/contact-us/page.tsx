"use client";

import { ContactUsContainer, PageHeader } from "@/components";
import { Wrapper } from "@/components/Shared";

const ContactUs = () => (
  <Wrapper>
    <PageHeader
      pageName="Contact US"
      mainTitle="Feel Free To Contact"
      subTitle={<span className="text-primary">With Us</span>}
    />
    <ContactUsContainer />
  </Wrapper>
);

export default ContactUs;
