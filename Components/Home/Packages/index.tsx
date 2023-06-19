"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import { packagesData } from "@public/Data";
import PackageCard from "./PackageCard";

const Packages = () => (
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

      {/* Package Card */}
      <section className="flex justify-center items-start flex-wrap gap-[30px] md:gap-[60px] mt-[30px] md:mt-[60px]">
        {packagesData.map((props, i) => (
          <PackageCard {...props} key={i} />
        ))}
      </section>
    </Container>
  </MainContainer>
);

export default Packages;
