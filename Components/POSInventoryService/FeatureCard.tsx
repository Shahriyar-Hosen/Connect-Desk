"use client";
import { CommonText } from "@Components/Common";
import { ILabelAndIcon } from "@Interface";
import Image from "next/image";

const FeatureCard = ({ icon, label }: ILabelAndIcon) => (
  <div className="sm:w-full max-w-[190px] md:w-[190px] p-6 flex flex-col justify-center items-center gap-[30px] border border-base-100 rounded-xl shadow-md">
    <Image src={icon} alt="" />
    <CommonText className="font-semibold text-center">{label}</CommonText>
  </div>
);

export default FeatureCard;
