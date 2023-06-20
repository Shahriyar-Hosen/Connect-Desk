"use client";

import { CommonText, ComponentHeader, ConnectDesk } from "@Components/Common";
import { corporateSupport } from "@public/Data";
import SupportCard from "./SupportCard";

const SupportBox = () => (
  <div className="w-fit md:w-[50%] flex flex-col justify-center items-start md:justify-start gap-3 md:gap-4 md:pr-5 lg:pr-0 md:pt-12 lg:pt-0">
    <ComponentHeader
      title={
        <>
          <ConnectDesk text="lg" /> Deliver A
        </>
      }
      subTitle="Corporate Support For All Time"
      position="start"
    />

    <CommonText className="max-w-[415px]">
      When utilizing the software, issues and misunderstandings are quite
      frequent. Our professional support team is here to help you with these
      solutions.
    </CommonText>

    {corporateSupport.map((props, i) => (
      <div
        key={i}
        className={`w-full max-w-[415px] flex items-center justify-center ${
          i % 2 === 0 ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <SupportCard {...props} />
      </div>
    ))}
  </div>
);

export default SupportBox;
