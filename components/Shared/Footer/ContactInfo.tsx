"use client";

import { CommonText } from "@/components";
import { contactInfo } from "@/public/Data";
import Image from "next/image";
import { FC } from "react";
import { FooterTitle } from ".";
import { IIntlComponentParams } from "@/Interface";

export const ContactInfo: FC<IIntlComponentParams> = ({ t }) => (
  <div className="flex flex-col gap-[10px]">
    <FooterTitle text="sm">{t("footer.contactInfo")}</FooterTitle>
    <div className="flex flex-col gap-[10px]">
      {contactInfo.map(({ icon, number, time, title }, i) => (
        <div key={i} className="flex justify-start items-center gap-[10px]">
          <Image src={icon} alt="" />
          <CommonText>
            {t(title)}: {number} ({time})
          </CommonText>
        </div>
      ))}
    </div>
  </div>
);
