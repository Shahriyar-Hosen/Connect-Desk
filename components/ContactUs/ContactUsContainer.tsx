"use client";

import { IIntlTranslator } from "@/Interface";
import { FC } from "react";
import { ContactDetails, ContactUsForm, MainContainer } from "..";

export const ContactUsContainer: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer>
    <div className="flex flex-col max-w-[1020px] lg:flex-row gap-6 w-[90%] lg:w-[75%] mx-auto">
      <ContactDetails t={t} />
      <ContactUsForm t={t} />
    </div>
  </MainContainer>
);
