"use client";

import HeroSection from "@Components/HeroSection";
import {
  AboutHome,
  ImportantFeatures,
  PerfectSolution,
} from "@Components/Home";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutHome />
      <PerfectSolution />
      <ImportantFeatures />
    </main>
  );
};

export default Home;
