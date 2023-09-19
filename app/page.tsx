"use client";

import {
  AboutHome,
  CommonText,
  ConnectDesk,
  FreeTrial,
  HeroSection,
  ImportantFeatures,
  Packages,
  PerfectSolution,
  Support,
} from "@/components";
import { Wrapper } from "@/components/Shared";
import { heroLaptop } from "@/public/assets/images";

const Home = () => (
  <Wrapper>
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
      button1="Buy Now"
      button2="Watch Video"
    />

    <AboutHome />
    <PerfectSolution />
    <ImportantFeatures />
    <Packages />
    <Support />
    <FreeTrial />
  </Wrapper>
);

export default Home;
