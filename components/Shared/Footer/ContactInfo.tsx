"use client";

import { IIntlTranslator } from "@/Interface";
import { CommonText } from "@/components";
import { contactInfo } from "@/public/Data";
import Image from "next/image";
import { FC } from "react";
import { FooterTitle } from ".";

export const ContactInfo: FC<IIntlTranslator> = ({ t }) => (
  <div className="flex flex-col gap-[10px]">
    <FooterTitle text="sm">{t("footer.contactInfo")}</FooterTitle>
    <div className="flex flex-col gap-[10px]">
      {contactInfo.map(({ icon, number, time, title }, i) => (
        <div key={i} className="flex justify-start items-center gap-[10px]">
          <Image src={icon} alt="" />
          <CommonText>
            {t(title)}: {t(number)} ({t(time)})
          </CommonText>
        </div>
      ))}
    </div>
  </div>
);
