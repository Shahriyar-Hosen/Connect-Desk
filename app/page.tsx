"use client";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Logo,
} from "@Components/Common";
import HeroSection from "@Components/HeroSection";
import AboutHome from "@Components/Home/AboutHome";

const Home = () => {
  return (
    <div className="flex  w-full  flex-col gap-5">
      <HeroSection />
      <AboutHome />
    </div>
  );
};

export default Home;
