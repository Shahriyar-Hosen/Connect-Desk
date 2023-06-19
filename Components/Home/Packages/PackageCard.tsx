"use client";
import { BackgroundImage, Button, CommonText } from "@Components/Common";
import { IPackages } from "@Interface";
import { takaLogo } from "@public/assets";
import { packageBg, packageBgLite } from "@public/assets/images";
import Image from "next/image";
import CartTop from "./CartTop";
import FeaturesCard from "./FeaturesCard";

const PackageCard = (
  { duration, features, price, title }: IPackages,
  i: number
) => {
  return (
    <BackgroundImage
      key={i}
      img={i % 2 === 0 ? packageBgLite : packageBg}
      className="sm:w-[400px] shadow-lg rounded-[25px]"
    >
      <div className="flex justify-center items-center flex-col pb-7">
        <CartTop title={title} height="h-12 sm:h-14" text="lg" />

        {/* Duration */}
        <CommonText text="md" className="text-[#1B253F] mt-2 sm:mt-3">
          {duration}
        </CommonText>

        {/* Prices */}
        <h6 className="font-semibold text-2xl sm:text-3xl md:text-4xl mt-2.5 flex justify-center items-center gap-1">
          <Image src={takaLogo} width={21} alt="business package" /> {price}
        </h6>

        {/* Features Card */}
        <FeaturesCard features={features} />

        {/* Purchase Package */}
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
};

export default PackageCard;
