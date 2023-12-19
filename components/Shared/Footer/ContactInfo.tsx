"use client";

import { IIntlTranslator, ILabelIcon } from "@/Interface";
import { CommonText } from "@/components";
import { contactInfo } from "@/public/Data";
import { location } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";
import { FooterTitle } from ".";

const InfoBox: FC<ILabelIcon> = ({ icon, label }) => (
  <div className="flex justify-start items-center gap-[10px]">
    <Image src={icon} alt="" />
    <CommonText>{label}</CommonText>
  </div>
);

export const ContactInfo: FC<IIntlTranslator> = ({ t }) => (
  <div className="flex flex-col gap-[10px]">
    <FooterTitle text="sm">{t("footer.contactInfo")}</FooterTitle>
    <div className="flex flex-col gap-[10px]">
      {contactInfo.map(({ icon, number, time, title }, i) => (
        <InfoBox
          key={i}
          icon={icon}
          label={`${t(title)}: ${t(number)} (${t(time)})`}
        />
      ))}
    </div>
    <InfoBox icon={location} label={t("footer.contactOptions.location")} />
  </div>
);
