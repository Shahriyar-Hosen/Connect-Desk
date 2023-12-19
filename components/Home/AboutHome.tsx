"use client";

/* eslint-disable react/no-unescaped-entities */
import { IIntlLang, IIntlTranslator } from "@/Interface";
import { mackbook } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next";
import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  LinkButton,
  MainContainer,
} from "..";

export const AboutHome: FC<IIntlTranslator & IIntlLang> = ({ t, lng }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        position="center"
        title={
          <span>
            {t("aboutHome.about")} <ConnectDesk lng={lng} text="xl" />
          </span>
        }
        subTitle={t("aboutHome.software")}
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
            <Trans
              i18nKey="aboutHome.firstPara"
              components={{ strong: <strong /> }}
              t={t}
            />
          </CommonText>
          <CommonText>
            <Trans
              i18nKey="aboutHome.secondPara"
              components={{ strong: <strong /> }}
              t={t}
            />
          </CommonText>
          <div className="xl:mt-6">
            <LinkButton link="/about-us" variant="primary">
              {t("aboutHome.buttonLevel")}
            </LinkButton>
          </div>
        </div>
      </div>
    </Container>
  </MainContainer>
);
