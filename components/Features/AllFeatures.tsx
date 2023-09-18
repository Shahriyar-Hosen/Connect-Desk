"use client";

import { features } from "@/public/Data";
import { FC } from "react";
import { MainContainer } from "..";
import { Feature } from "./Feature";

export const AllFeatures: FC = () => (
  <MainContainer isRemoveMargin>
    {features.map((feature) => (
      <Feature key={feature.id} {...feature} />
    ))}
  </MainContainer>
);
