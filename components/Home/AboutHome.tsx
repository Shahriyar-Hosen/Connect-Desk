"use client";

/* eslint-disable react/no-unescaped-entities */
import { mackbook } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";
import {
  Button,
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "..";

export const AboutHome: FC = () => (
  <MainContainer>
    <Container>
      <ComponentHeader
        position="center"
        title={
          <span>
            About <ConnectDesk text="xl" />
          </span>
        }
        subTitle="Software"
      />

      <div className="w-full md:w-[95%] xl:w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-[5%] mt-6 lg:mt-0">
        <div className="flex justify-center lg:justify-end xl:justify-center w-full xl:w-fit">
          <Image
            src={mackbook}
            className="xl:w-[521px] md:w-[70%] w-[80%]"
            alt=""
          />
        </div>

        <div className="w-[90%] lg:max-w-[500px] flex flex-col justify-start items-start gap-4 mt-6 xl:mt-0">
          <CommonText>
            Using the ConnectDesk, you can manage your company's sales and
            marketing modules. ConnectDesk software automates tasks including
            client sales, manage inventory, and distribution activities.
          </CommonText>
          <CommonText>
            ConnectDesk software not only assists you in managing your business
            but also keeps track of your inventory and personnel. It also
            features an extensive account management system.
          </CommonText>
          <div className="xl:mt-6">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </div>
    </Container>
  </MainContainer>
);
