"use client";

import { Container } from "@/components";
import { FC } from "react";
import { CompanySupport, ContactDetails, DownloadApp } from ".";
import { IIntlComponentParams } from "@/Interface";

export const MainFooterContainer: FC<IIntlComponentParams> = ({ t }) => (
  <Container>
    <div className="flex justify-center xl:justify-between items-center gap-[100%] xl:gap-2 md:gap-[7%] flex-wrap">
      <ContactDetails t={t} />
      <CompanySupport t={t} />
      <DownloadApp t={t} />
    </div>
  </Container>
);
