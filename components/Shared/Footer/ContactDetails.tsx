"use client";

import { CommonText, Logo } from "@/components";
import { FC } from "react";
import { ContactInfo } from ".";
import { IIntlComponentParams } from "@/Interface";
import { Trans } from "react-i18next";

export const ContactDetails: FC<IIntlComponentParams> = ({ t }) => (
  <div className="w-full lg:w-auto mb-8 xl:mb-[58px] flex lg:block flex-col justify-center items-center">
    <div className="flex flex-col gap-4 mb-9 ">
      <Logo />
      <CommonText text="sm">
        <Trans i18nKey="footer.contactText" components={{ br: <br /> }} t={t} />
      </CommonText>
    </div>

    <ContactInfo t={t} />
  </div>
);
