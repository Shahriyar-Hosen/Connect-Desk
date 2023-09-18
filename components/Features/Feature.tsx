"use client";

import { IFeaturesPage } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText, ComponentHeader } from "..";

export const Feature: FC<IFeaturesPage> = ({ id, image, paragraph, title }) => (
  <div
    className={`flex flex-col ${
      id % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
    } md:gap-14 lg:gap-24 justify-center md:mb-20 px-10`}
  >
    <div className="">
      <Image
        className="w-full max-w-[530px] mx-auto"
        src={image}
        alt={title.second}
      />
    </div>
    <div className="max-w-[342px] flex flex-col justify-center mx-auto md:mx-0 mt-8 md:mt-0">
      <ComponentHeader
        position="start"
        title={
          <span>
            {title.first} <span className="text-primary">{title.second}</span>
          </span>
        }
        subTitle={<span className="text-secondary">{title.third}</span>}
      />
      <br />
      <CommonText>{paragraph}</CommonText>
    </div>
  </div>
);
