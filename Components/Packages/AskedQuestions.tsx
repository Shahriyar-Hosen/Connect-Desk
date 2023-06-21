"use client";
import { ComponentHeader, Container, MainContainer } from "@Components/Common";
import FAQs from "@Components/FAQ";
import { faqData } from "@public/Data/faq";

export const AskedQuestions = () => (
  <MainContainer>
    <Container>
      <ComponentHeader title="Frequently Asked Questions" />
      <FAQs data={faqData} limit={10} />
    </Container>
  </MainContainer>
);
