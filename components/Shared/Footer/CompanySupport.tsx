"use client";

import Link from "next/link";

import { IIntlTranslator } from "@/Interface";
import { infoData } from "@/public/Data";
import { FC } from "react";
import { FooterTitle } from ".";

export const CompanySupport: FC<IIntlTranslator> = ({ t }) => (
  <div className="grid grid-cols-2 mt-0 xl:mt-10 lg:w-[27%] gap-[10%]">
    {infoData.map(({ name, option }, i) => (
      <div key={i}>
        <FooterTitle className="mb-6">{t(name)}</FooterTitle>

        <div className="flex flex-col justify-center items-start gap-3 w-auto lg:min-w-[160px]">
          {option.map(({ link, title }, i) => (
            <Link
              key={i}
              href={link}
              className="font-normal hover:font-semibold text-xs lg:text-sm transition-all delay-150"
            >
              {t(title)}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);
