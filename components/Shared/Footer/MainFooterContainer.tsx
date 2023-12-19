"use client";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { Container } from "@/components";
import { FC } from "react";
import { CompanySupport, ContactDetails, DownloadApp } from ".";

export const MainFooterContainer: FC<IIntlTranslator & IIntlLang> = ({
  t,
  lng,
}) => (
  <Container>
    <div className="flex justify-center xl:justify-between items-center gap-[100%] xl:gap-2 md:gap-[7%] flex-wrap">
      <ContactDetails lng={lng} t={t} />
      <CompanySupport t={t} />
      <DownloadApp t={t} />
    </div>
  </Container>
);
