"use client";

import HeroSection from "@Components/HeroSection";
import {
  AboutHome,
  ImportantFeatures,
  Packages,
  PerfectSolution,
} from "@Components/Home";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutHome />
      <PerfectSolution />
      <ImportantFeatures />
      <Packages />
    </main>
  );
};

export default Home;
