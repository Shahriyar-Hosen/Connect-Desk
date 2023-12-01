"use client";

import { FC } from "react";
import { ComponentHeader, Container, MainContainer } from "..";
import { WhoWeAreImg } from "./WhoWeAreImg";
import { IIntlTranslator } from "@/Interface";
import { Trans } from "react-i18next";

export const WhoWeAre: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <Trans
              i18nKey="whoWeAre.title"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"about-us"}
            />
          </>
        }
        subText={t("whoWeAre.subText", { ns: "about-us", cd: "ConnectDesk" })}
      />

      <WhoWeAreImg />

      <div className=" grid justify-items-center grid-cols-1 md:grid-cols-10 max-w-6xl mx-auto gap-2.5">
        <h6 className="col-span-2 w-full text-center md:text-start text-xl md:text-3xl font-semibold">
          {t("whoWeAre.whoWeAre", { ns: "about-us" })}
        </h6>

        <p className="col-span-8 w-full text-justify md:text-start text-base md:text-xl text-[#797979]">
          {t("whoWeAre.aboutPara", { ns: "about-us", cd: "ConnectDesk" })}
        </p>
      </div>
    </Container>
  </MainContainer>
);
