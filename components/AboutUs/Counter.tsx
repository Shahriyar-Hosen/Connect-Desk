"use client";

import { FC } from "react";

import { Container, MainContainer } from "..";
import { CounterCard } from "./CounterCard";
import { IIntlTranslator } from "@/Interface";

export const Counter: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer>
    <Container>
      <div className="bg-base-100 bg-opacity-50 py-12 px-8 md:py-20 md:px-16 w-fit lg:w-full max-w-6xl mx-auto rounded-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
        <CounterCard
          maxCount={100}
          label="M"
          title={t("counter.clientSatisfaction", { ns: "about-us" })}
        />
        <CounterCard
          maxCount={24}
          label=" h"
          title={t("counter.expertSupportTeam", { ns: "about-us" })}
        />
        <CounterCard
          maxCount={98}
          label=" k+"
          title={t("counter.salesCount", { ns: "about-us" })}
        />
        <CounterCard
          maxCount={208}
          label=" +"
          title={t("counter.clientWorldwide", { ns: "about-us" })}
        />
      </div>
    </Container>
  </MainContainer>
);
