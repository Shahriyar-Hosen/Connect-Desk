"use client";

/* eslint-disable react/no-unescaped-entities */
import { CommonText, Packages } from "@Components/Common";
import HeroSection from "@Components/HeroSection";
import { posInventoryService } from "@public/assets/images";

const POSInventoryService = () => (
  <main>
    <HeroSection
      mainText={
        <>
          Perfect POS Software For
          <span className="text-primary"> Retail </span>
          <span className="text-secondary">Business</span>
        </>
      }
      paragraph={
        <CommonText>
          Use POS billing software to oversee all aspects of your retail
          business. With ConnectDesk POS Software, you can effortlessly manage
          your retail business' sales, inventory, purchases, customers,
          finances, and more. Create and print expert invoices, take advantage
          by connect mobile apps to boost your earnings.
        </CommonText>
      }
      button1="View Demo"
      button2="Proposal"
      image={posInventoryService}
      pos
    />

    <Packages />
  </main>
);

export default POSInventoryService;
