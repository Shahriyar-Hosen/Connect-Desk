"use client";

import { Container } from "@Components/Common";
import { CompanySupport, ContactDetails, DownloadApp } from ".";

const MainFooterContainer = () => (
  <Container>
    <div className="flex justify-center xl:justify-between items-center gap-[100%] xl:gap-2 md:gap-[7%] flex-wrap">
      <ContactDetails />
      <CompanySupport />
      <DownloadApp />
    </div>
  </Container>
);

export default MainFooterContainer;
