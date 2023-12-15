"use client";

import { servicesData } from "@/public/Data";
import { FC } from "react";
import { ComponentHeader, ConnectDesk, Container, MainContainer } from "..";
import { ServiceCard } from "./ServiceCard";
import { IIntlTranslator, IIntlLang } from "@/Interface";
import { Trans } from "react-i18next";


export const AllServices: FC<IIntlTranslator & IIntlLang> = ({ t, lng }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <Trans
              i18nKey="AllServicesOfCD"
              components={{
                ConnectDeskLogo: <ConnectDesk lng={lng} text="lg" font="poppins" />,
              }}
              t={t}
            />
          </>
        }
      />

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-20 max-w-6xl mx-auto">
        {servicesData.map((service, i) => (
          <ServiceCard {...service} key={i} t={t} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
