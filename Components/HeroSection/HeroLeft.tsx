"use client";

import Image from "next/image";

import { Button } from "@Components/Common";
import { IHeroLeft } from "@Interface";
import { arrowHero } from "@public/assets/images";

export const HeroLeft = ({
  mainText,
  subText,
  paragraph,
  button1,
  button2,
}: IHeroLeft) => (
  <div className="md:mt-[5%] sm:w-[90%] md:w-[70%] lg:w-[70%] xl:w-fit md:ml-10 lg:ml-[60px] mx-auto flex flex-col justify-center items-center md:justify-start md:items-start">
    <div className="relative">
      <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold md:max-w-[300px] lg:max-w-[414px] text-center md:text-start">
        {mainText}
      </h1>
      <h1 className="w-full flex justify-center md:justify-start items-center">
        {subText}
      </h1>
      <Image
        className="absolute hidden md:block -bottom-4 left-1"
        src={arrowHero}
        alt=""
      />
    </div>

    <div className="w-full mt-[15px] mb-[25px] md:mt-[26px] md:mb-[40px] md:max-w-[300px] lg:max-w-[414px]">
      {paragraph}
    </div>

    <div className="flex gap-4 items-center justify-start">
      <Button variant="primary" text="14">
        {button1}
      </Button>
      <Button variant="secondary" text="14">
        {button2}{" "}
      </Button>
    </div>
  </div>
);
