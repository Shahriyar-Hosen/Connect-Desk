"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
/* eslint-disable react/no-unescaped-entities */
import {
  AfterSalesSupport,
  AskedQuestions,
  CommonText,
  CustomerSupport,
  GrowRetailFaster,
  HeroSection,
  Packages,
  SoftwareFeatures,
  TermCondition,
} from "@/components";

import { faqData } from "@/public/Data/faq";
import { posInventoryService } from "@/public/assets/images";
import { FC } from "react";

const POSInventoryService: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "service", "packages"]);

  return (
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

      <SoftwareFeatures />
      <GrowRetailFaster />
      <Packages t={t} />
      <TermCondition />
      <AfterSalesSupport />
      <CustomerSupport t={t} />
      <AskedQuestions t={t} data={faqData} limit={5} />
    </main>
  );
};
export default POSInventoryService;
