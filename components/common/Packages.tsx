"use client";

import { FC } from "react";
import { ComponentHeader, Container, MainContainer } from ".";
import { PackagesCards } from "..";

export const Packages: FC = () => (
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
