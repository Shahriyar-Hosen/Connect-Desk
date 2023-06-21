"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import { PackagesCards } from "@Components/Packages";

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

      <PackagesCards />
    </Container>
  </MainContainer>
);

export default Packages;
