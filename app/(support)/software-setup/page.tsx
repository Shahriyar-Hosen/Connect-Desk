"use client";

import { CommonText, Container, MainContainer } from "@Components/Common";
import PageHeader from "@Components/PageHeader";

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

        <div className="mt-[50px] w-full max-w-[700px] h-auto max-h-[380px] mx-auto flex justify-center items-center rounded-lg overflow-hidden boxShadow">
          <iframe
            className="w-full md:w-[700px] h-auto md:h-[380px] aspect-video"
            src="https://www.youtube.com/embed/o2W8_mvLuxU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Container>
    </MainContainer>
  </main>
);

export default SoftwareSetup;
