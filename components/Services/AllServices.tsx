"use client";

import { servicesData } from "@/public/Data";
import { FC } from "react";
import { ComponentHeader, ConnectDesk, Container, MainContainer } from "..";
import { ServiceCard } from "./ServiceCard";
import { IIntlLang } from "@/Interface";

export const AllServices: FC<IIntlLang> = ({ lng }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            All Services Of <ConnectDesk lng={lng} text="lg" font="poppins" />
          </>
        }
      />

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-20 max-w-6xl mx-auto">
        {servicesData.map((service, i) => (
          <ServiceCard {...service} key={i} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
