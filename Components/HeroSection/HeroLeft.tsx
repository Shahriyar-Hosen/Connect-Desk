"use client";
import { Button, CommonText, ConnectDesk } from "@Components/Common";
import { IHeroSection } from "@Interface/common/IHeroSection";

export const HeroLeft = ({ mainText, subText, button }: IHeroSection) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">
        Simplify and Grow Your <br /> Retail Business with
      </h1>
      <h1>
        <ConnectDesk text="xl" />
      </h1>
      <div className="max-w-[413px] mt-[26px] mb-[50px]">
        <CommonText>
          Its user-friendly interface enables you to send invoices after sale,
          create quotations as well as track expenses, manage inventory, check
          daily transaction, view and update financial reports, among other
          things.
        </CommonText>
      </div>
      <div className="flex gap-4">
        <Button variant="primary">Buy Now</Button>
        <Button variant="secondary">Watch Video</Button>
      </div>
    </>
  );
};
