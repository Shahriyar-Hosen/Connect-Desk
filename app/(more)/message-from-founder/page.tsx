"use client";

import { Container, MainContainer } from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { founder } from "@public/assets/images";
import Image from "next/image";

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
        <div className="max-w-6xl mx-auto">
          <div className="w-full max-w-[342px] flex flex-col gap-3">
            <div className="border border-primary p-3 w-full rounded-[10px]">
              <Image src={founder} className="w-full rounded-[10px]" alt="" />
            </div>

            <div className="w-full bg-primary font-semibold rounded-[10px] px-[15px] py-3 text-white">
              <span className="text-2xl">MD. Hanif Uddin</span>
              <span className="text-xl">Founder & CEO, ConnectDesk</span>
            </div>
          </div>
        </div>
      </Container>
    </MainContainer>
  </main>
);

export default MessageFromFounder;
