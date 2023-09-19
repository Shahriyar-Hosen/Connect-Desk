"use client";

import { AllServices, CommonText, HeroSection } from "@/components";
import { Wrapper } from "@/components/Shared";
import { servicesImg } from "@/public/assets/images";
import { FC } from "react";

const Services: FC = () => (
  <Wrapper>
    <HeroSection
      mainText={
        <>
          Software That We Are Serving Will Aid in
          <span className="text-primary"> Business </span>
          <span className="text-secondary">Management</span>
        </>
      }
      paragraph={
        <CommonText>
          ConnectDesk App is a simple, Easy-to-use accounting Inventory app for
          small and medium businesses. Its simple user interface allows you to
          send invoices, bills & quotations, Track Expenses & receipts, manage
          inventory, view daily transaction books, view & send various financial
          reports and much more.
        </CommonText>
      }
      button2="See All Services"
      image={servicesImg}
      service
    />
    <AllServices />
  </Wrapper>
);

export default Services;
