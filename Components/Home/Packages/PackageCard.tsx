"use client";

import { BackgroundImage, Button, CommonText } from "@Components/Common";
import { IPackages } from "@Interface";
import { packageBg, packageBgLite } from "@public/assets/images";
import CartTop from "./CartTop";
import FeaturesCard from "./FeaturesCard";
import Prices from "./Prices";

const PackageCard = (
  { duration, features, price, title }: IPackages,
  i: number
) => (
  <BackgroundImage
    key={i}
    img={i % 2 === 0 ? packageBgLite : packageBg}
    className="sm:w-[400px] shadow-lg rounded-[21px] max-w-[390px] sm:max-w-full"
  >
    <div className="flex justify-center items-center flex-col pb-7">
      <CartTop title={title} height="h-12 sm:h-14" text="lg" />

      <CommonText text="md" className="text-[#1B253F] mt-2 sm:mt-3">
        {duration}
      </CommonText>

      <Prices price={price} />
      <FeaturesCard features={features} />

      <Button
        variant="primary"
        rounded
        text="16"
        size="lg"
        className="-mt-[25px]"
      >
        Purchase Package
      </Button>
    </div>
  </BackgroundImage>
);

export default PackageCard;
