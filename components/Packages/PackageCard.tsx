"use client";

import { IIntlTranslator, IPackageCard } from "@/Interface";
import { packageBg, packageBgLite } from "@/public/assets/images";
import { FC } from "react";
import { CartTop, FeaturesCard, Prices } from ".";
import { BackgroundImage, Button, CommonText } from "..";

export const PackageCard: FC<IPackageCard & IIntlTranslator> = ({
  index,
  duration,
  features,
  price,
  title,
  t,
}) => (
  <BackgroundImage
    key={index}
    img={index % 2 === 0 ? packageBgLite : packageBg}
    className="sm:w-[400px] shadow-lg rounded-[21px] max-w-[390px] sm:max-w-full"
  >
    <div className="flex justify-center items-center flex-col pb-7">
      <CartTop title={t(title)} height="h-12 sm:h-14" text="lg" />

      <CommonText text="md" className="text-[#1B253F] mt-2 sm:mt-3">
        {t(duration)}
      </CommonText>

      <Prices price={t(price)} />
      <FeaturesCard t={t} features={features} />

      <Button
        variant="primary"
        rounded
        text="16"
        size="lg"
        className="-mt-[25px]"
      >
        {t("packages.purchasePackage")}
      </Button>
    </div>
  </BackgroundImage>
);
