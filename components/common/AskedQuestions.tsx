"use client";

import { IFAQ } from "@/Interface";
import { FC } from "react";
import { ComponentHeader, Container, MainContainer } from ".";
import { FAQs } from "..";

export const AskedQuestions: FC<IFAQ> = ({ data, limit }) => (
  <MainContainer>
    <Container>
      <ComponentHeader title="Frequently Asked Questions" />
      <FAQs data={data} limit={limit} />
    </Container>
  </MainContainer>
);
