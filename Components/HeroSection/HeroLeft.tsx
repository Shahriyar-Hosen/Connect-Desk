"use client";
import { Button, CommonText, ConnectDesk } from "@Components/Common";

export const HeroLeft = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">
        Simplify and Grow Your Retail Business with
      </h1>
      <h1>
        <ConnectDesk text="xl" />
      </h1>
      <div className="w-[60%] my-4">
        <CommonText>
          Its user-friendly interface enables you to send invoices after sale,
          create quotations as well as track expenses, manage inventory, check
          daily transaction, view and update financial reports, among other
          things.
        </CommonText>
      </div>
      <div className="flex gap-2">
        <Button variant="primary">Buy Now</Button>
        <Button variant="secondary">Watch Video</Button>
      </div>
    </>
  );
};
