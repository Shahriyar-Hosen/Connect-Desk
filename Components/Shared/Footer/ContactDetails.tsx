"use client";

import { CommonText, Logo } from "@Components/Common";
import { ContactInfo } from ".";

export const ContactDetails = () => {
  const textBreaking = (width: number, text: string) => {
    console.log({ text });
  };

  const text =
    "ConnectDesk is a software development company. The company works with business solutions for SME traders.";

  console.log(text.length);

  textBreaking(100, text);
  console.log({});
  return (
    <div className="w-full lg:w-auto mb-8 xl:mb-[58px] flex lg:block flex-col justify-center items-center">
      <div className="flex flex-col gap-4 mb-9 ">
        <Logo />
        <CommonText size="sm">
          ConnectDesk is a software development company. The <br /> company
          works with business solutions for SME traders.
        </CommonText>
      </div>

      <ContactInfo />
    </div>
  );
};
