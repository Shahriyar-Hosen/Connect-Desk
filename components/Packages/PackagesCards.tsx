"use client";

import { packagesData } from "@/public/Data";
import { PackageCard } from "./PackageCard";
import { FC } from "react";
import { IIntlTranslator } from "@/Interface";

export const PackagesCards: FC<IIntlTranslator> = ({ t }) => (
  <section className="flex justify-center items-start flex-wrap gap-[30px] md:gap-[60px] mt-[30px] md:mt-[60px]">
    {packagesData.map((packages, i) => (
      <PackageCard {...packages} t={t} index={i} key={i} />
    ))}
  </section>
);
