"use client";

import { CommonText, ConnectDesk } from "@Components/Common";
import HeroSection from "@Components/HeroSection";
import {
  AboutHome,
  ImportantFeatures,
  PerfectSolution,
} from "@Components/Home";
import { heroLaptop } from "@public/assets/images";

const Home = () => {
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
      <ImportantFeatures />
    </main>
  );
};

export default Home;
