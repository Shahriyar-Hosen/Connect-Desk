"use client";

import { packagesData } from "@/public/Data";
import { PackageCard } from "./PackageCard";

export const PackagesCards = () => (
  <section className="flex justify-center items-start flex-wrap gap-[30px] md:gap-[60px] mt-[30px] md:mt-[60px]">
    {packagesData.map((packages, i) => (
      <PackageCard {...packages} index={i} key={i} />
    ))}
  </section>
);
