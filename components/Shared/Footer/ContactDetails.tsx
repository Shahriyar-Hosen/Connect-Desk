"use client";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { CommonText, Logo } from "@/components";
import { FC } from "react";
import { Trans } from "react-i18next";
import { ContactInfo } from ".";

export const ContactDetails: FC<IIntlTranslator & IIntlLang> = ({ t, lng }) => (
  <div className="w-full lg:w-auto mb-8 xl:mb-[58px] flex lg:block flex-col justify-center items-center">
    <div className="flex flex-col gap-4 mb-9">
      <Logo lng={lng} />
      <CommonText text="sm" className="font-sans">
        <Trans i18nKey="footer.contactText" components={{ br: <br /> }} t={t} />
      </CommonText>
    </div>

    <ContactInfo t={t} />
  </div>
);
