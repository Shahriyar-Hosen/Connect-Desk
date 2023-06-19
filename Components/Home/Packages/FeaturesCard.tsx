"use client";

import { CartTop, FeaturesItem } from ".";

export const FeaturesCard = ({ features }: { features: string[] }) => (
  <div className="mt-3 sm:mt-6 w-[85%] h-auto rounded-[25px]  bg-white pb-6">
    <CartTop title="Features" height="h-[45px] sm:h-[50px]" text="md" />

    {/* Features Items */}
    <div className="flex flex-col items-start justify-center m-3 sm:m-4 gap-1 sm:gap-2">
      {features.map((item, i) => (
        <FeaturesItem feature={item} key={i} />
      ))}
    </div>
  </div>
);
