"use client";
import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import FAQs from "@Components/FAQ";
import { IFAQ } from "@Interface";

export const AskedQuestions = ({ data, limit }: IFAQ) => (
  <MainContainer>
    <Container>
      <ComponentHeader title="Frequently Asked Questions" />
      <FAQs data={data} limit={limit} />
    </Container>
  </MainContainer>
);
