"use client";
import { posInventoryServicesData } from "@public/Data";
import FeatureCard from "./FeatureCard";

const AllFeatures = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-11 gap-x-7 justify-items-center w-full max-w-[1080px] mx-auto mt-[50px] px-5">
    {posInventoryServicesData.map((item, i) => (
      <FeatureCard {...item} key={i} />
    ))}
  </section>
);

export default AllFeatures;
