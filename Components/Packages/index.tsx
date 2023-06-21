"use client";

export * from "./CartTop";
export * from "./FeaturesCard";
export * from "./FeaturesItem";
export * from "./PackageCard";
export * from "./Prices";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import { packagesData } from "@public/Data";
import { PackageCard } from "./PackageCard";

const PackagesCards = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            Pricing To <span className="text-primary">Suite</span> All Size
          </>
        }
        subTitle={
          <>
            Of <span className="text-secondary">Business</span>
          </>
        }
      />

      <section className="flex justify-center items-start flex-wrap gap-[30px] md:gap-[60px] mt-[30px] md:mt-[60px]">
        {packagesData.map((props, i) => (
          <PackageCard {...props} index={i} key={i} />
        ))}
      </section>
    </Container>
  </MainContainer>
);

export default PackagesCards;
