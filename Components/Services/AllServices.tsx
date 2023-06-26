"use client";

import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";
import { servicesData } from "@public/Data/services";
import { ServiceCard } from "./ServiceCard";

export const AllServices = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            All Services Of <ConnectDesk text="lg" font="Poppins" />
          </>
        }
      />

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-20 max-w-6xl mx-auto">
        {servicesData.map((item, i) => (
          <ServiceCard {...item} key={i} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
