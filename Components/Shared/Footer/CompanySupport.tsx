"use client";

import Link from "next/link";

import { infoData } from "@public/Data";
import { FooterTitle } from ".";

export const CompanySupport = () => (
  <div className="grid grid-cols-2 mt-0 xl:mt-10 lg:w-[27%] gap-[10%]">
    {infoData.map(({ name, option }, i) => (
      <div key={i}>
        <FooterTitle className="mb-6">{name}</FooterTitle>

        <div className="flex flex-col justify-center items-start gap-3 w-auto">
          {option.map(({ link, title }, i) => (
            <Link href={link} key={i}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);
