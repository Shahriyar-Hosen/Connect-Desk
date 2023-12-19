"use client";

import { posInventoryServicesData } from "@/public/Data";
import { FC } from "react";
import { FeatureCard } from "./FeatureCard";
import { IIntlTranslator } from "@/Interface";

export const InventoryServices: FC<IIntlTranslator> = ({ t }) => (
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-11 gap-x-7 justify-items-center w-full max-w-[1080px] mx-auto mt-[50px] px-5">
    {posInventoryServicesData.map((pos, i) => (
      <FeatureCard {...pos} key={i} t={t} />
    ))}
  </section>
);
