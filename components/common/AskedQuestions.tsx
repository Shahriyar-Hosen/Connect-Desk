"use client";

import { IFAQ, IIntlTranslator } from "@/Interface";
import { FC } from "react";
import { ComponentHeader, Container, MainContainer } from ".";
import { FAQs } from "..";

export const AskedQuestions: FC<IFAQ & IIntlTranslator> = ({
  data,
  limit,
  t,
}) => (
  <MainContainer>
    <Container>
      <ComponentHeader title={t("askedQuestions.title")} />
      <FAQs data={data} limit={limit} t={t} />
    </Container>
  </MainContainer>
);
