"use client";

import { CommonText, ConnectDesk, InputField } from "@Components/Common";
import HeroSection from "@Components/HeroSection";
import {
  AboutHome,
  ImportantFeatures,
  Packages,
  PerfectSolution,
} from "@Components/Home";
import { heroLaptop } from "@public/assets/images";
import { ChangeEvent } from "react";

const Home = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <main>
      <HeroSection
        mainText="Simplify and Grow Your Retail Business with"
        subText={<ConnectDesk text="xl" />}
        paragraph={
          <CommonText>
            Its user-friendly interface enables you to send invoices after sale,
            create quotations as well as track expenses, manage inventory, check
            daily transaction, view and update financial reports, among other
            things.
          </CommonText>
        }
        image={heroLaptop}
      />
      <AboutHome />
      <PerfectSolution />
      <InputField
        handleOnChange={handleOnChange}
        label="Business Name"
        placeholder="Enter your business name"
      />
      <ImportantFeatures />
      <Packages />
    </main>
  );
};

export default Home;
