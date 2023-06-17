"use client";

import { ComponentHeader, Container, MainContainer } from "@Components/Common";

const Packages = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader
          title={
            <span>
              Pricing To <span className="text-primary">Suite</span> All Size
            </span>
          }
          subTitle={
            <span>
              Of <span className="text-secondary">Business</span>
            </span>
          }
        />
        <h1>Packages</h1>
      </Container>
    </MainContainer>
  );
};

export default Packages;
