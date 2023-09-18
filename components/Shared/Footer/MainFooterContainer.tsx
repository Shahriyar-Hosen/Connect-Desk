"use client";

import { Container } from "@/components";
import { FC } from "react";
import { CompanySupport, ContactDetails, DownloadApp } from ".";

export const MainFooterContainer: FC = () => (
  <Container>
    <div className="flex justify-center xl:justify-between items-center gap-[100%] xl:gap-2 md:gap-[7%] flex-wrap">
      <ContactDetails />
      <CompanySupport />
      <DownloadApp />
    </div>
  </Container>
);
