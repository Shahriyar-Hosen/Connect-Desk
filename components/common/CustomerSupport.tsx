"use client";

import Image from "next/image";
import { FC } from "react";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { customerSupportData } from "@/public/Data";
import { supportBg } from "@/public/assets/images";
import { Trans } from "react-i18next";
import {
  BackgroundImage,
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from ".";

export const CustomerSupport: FC<IIntlTranslator & IIntlLang> = ({
  t,
  lng,
}) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <Trans
            i18nKey="customerSupport.title"
            components={{
              ConnectDesk: <ConnectDesk lng={lng} text="lg" />,
            }}
            t={t}
          />
        }
        subTitle={
          <Trans
            i18nKey="customerSupport.subTitle"
            components={{
              primary: <span className="text-primary" />,
            }}
            t={t}
          />
        }
      />

      <section className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 items-center mx-auto px-5 md:px-0">
        {customerSupportData.map(({ icon, label }, i) => (
          <BackgroundImage
            img={supportBg}
            key={i}
            className="w-full flex flex-col justify-center items-center max-w-[395px] rounded boxShadow p-[35px]"
          >
            <div className="flex justify-center items-center flex-col gap-[25px]">
              <Image src={icon} alt="Customer Support" />

              <CommonText className="text-primary font-semibold" text="xl">
                {label}
              </CommonText>
            </div>
          </BackgroundImage>
        ))}
      </section>
    </Container>
  </MainContainer>
);
