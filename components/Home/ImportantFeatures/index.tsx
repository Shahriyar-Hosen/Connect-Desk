"use client";

import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@/components";
import { featuresData } from "@/public/Data";
import { FC } from "react";
import { FeatureCard } from "./FeatureCard";
import { IIntlComponentParams } from "@/Interface";

export const ImportantFeatures: FC<IIntlComponentParams> = ({ t }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={t("importantFeatures.title")}
        subTitle={<ConnectDesk text="lg" />}
      />

      <section className="mt-[60px] max-w-[1107px] lg:w-[95%] xl:w-full mx-auto grid grid-cols-1 sm:grid-cols-1 gap-y-[45px] gap-x-[44px] md:grid-cols-2 lg:grid-cols-3 gap-11 justify-items-center content-center">
        {featuresData.map(({ des, icon, title }, i) => (
          <FeatureCard
            des={t(des, { cd: "ConnectDesk" })}
            icon={icon}
            title={t(title)}
            key={i}
          />
        ))}
      </section>
    </Container>
  </MainContainer>
);
