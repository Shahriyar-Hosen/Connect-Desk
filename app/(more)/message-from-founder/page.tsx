"use client";

import Image from "next/image";

import { CommonText, Container, MainContainer } from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { founder } from "@public/assets/images";

const MessageFromFounder = () => (
  <main>
    <PageHeader
      pageName="Message From Founder"
      mainTitle={
        <>
          Message From <span className="text-primary">Founder</span>
        </>
      }
    />

    <MainContainer isRemoveMargin>
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-start items-center  md:items-start gap-10 md:gap-20 py-5 md:py-0">
          <div className="w-full max-w-[342px] flex flex-col gap-3">
            <div className="border border-primary p-3 w-full rounded-[10px]">
              <Image src={founder} className="w-full rounded-[10px]" alt="" />
            </div>

            <div className="w-full bg-primary font-semibold rounded-[10px] px-[15px] py-3 text-white">
              <span className="text-2xl">MD. Hanif Uddin</span>
              <span className="text-xl">Founder & CEO, ConnectDesk</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-10">
            <div className="w-fit bg-base-100 bg-opacity-50 px-[30px] py-[13px] rounded-[10px] boxShadow">
              <span className="text-primary text-2xl font-semibold">
                Message From Founder
              </span>
            </div>

            <div className="w-fit bg-base-100 bg-opacity-50 px-[30px] py-[13px] rounded-[10px] boxShadow flex flex-col justify-center items-start gap-5 max-w-[610px]">
              <CommonText>
                I am delighted to welcome you to <strong>ConnectDesk</strong>,
                and I appreciate your interest in our company. At{" "}
                <strong>ConnectDesk</strong>, our mission is to provide
                innovative solutions that exceed our customers’ expectations
                while delivering outstanding customer service.
              </CommonText>
              <CommonText>
                We take pride in our comprehensive range of services, including
                software development, web design, e-commerce solutions, digital
                marketing, and more. Our team of skilled and experienced
                professionals is committed to delivering high-quality products
                and services that are tailored to meet your specific needs.
              </CommonText>
              <CommonText>
                Thank you for considering <strong>ConnectDesk</strong> for your
                technology needs. Please don’t hesitate to contact us if you
                have any questions or if you would like to discuss how we can
                assist you.
              </CommonText>
            </div>
          </div>
        </div>
      </Container>
    </MainContainer>
  </main>
);

export default MessageFromFounder;
