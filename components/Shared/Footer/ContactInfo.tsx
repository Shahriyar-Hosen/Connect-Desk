"use client";

import { CommonText } from "@/components";
import { contactInfo } from "@/public/Data";
import Image from "next/image";
import { FC } from "react";
import { FooterTitle } from ".";

export const ContactInfo: FC = () => (
  <div className="flex flex-col gap-[10px]">
    <FooterTitle text="sm">Contact Info</FooterTitle>
    <div className="flex flex-col gap-[10px]">
      {contactInfo.map(({ icon, number, time, title }, i) => (
        <div key={i} className="flex justify-start items-center gap-[10px]">
          <Image src={icon} alt="" />
          <CommonText>
            {title}: {number} ({time})
          </CommonText>
        </div>
      ))}
    </div>
  </div>
);
