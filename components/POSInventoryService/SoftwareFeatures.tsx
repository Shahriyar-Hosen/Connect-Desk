"use client";

import { FC } from "react";
import {
  AllFeatures,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "..";

export const SoftwareFeatures: FC = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <ConnectDesk text="xl" /> POS Software
          </>
        }
        subTitle="Features At A Glance"
      />

      <AllFeatures />
    </Container>
  </MainContainer>
);
