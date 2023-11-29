"use client";

import {
  CommonText,
  Container,
  MainContainer,
  PageHeader,
  Video,
} from "@/components";

const SoftwareSetup = () => (
  <main>
    <PageHeader
      pageName="Software Setup"
      mainTitle={
        <>
          Software <span className="text-primary">Setup</span>
        </>
      }
    />

    <MainContainer>
      <Container>
        <CommonText className="font-semibold text-center md:-mt-10" text="4xl">
          ফ্রী সাইনআপ বা অ্যাকাউন্ট তৈরি করার জন্য নিচের ভিডিও দেখুন
        </CommonText>

        <Video
          size="lg"
          className="mt-[50px]"
          url="https://www.youtube.com/embed/o2W8_mvLuxU"
        />
      </Container>
    </MainContainer>
  </main>
);

export default SoftwareSetup;
