"use client";

import { FC } from "react";
import { ComponentHeader, Container, MainContainer } from "..";
import { WhoWeAreImg } from "./WhoWeAreImg";
import { IIntlComponentParams } from "@/Interface";
import { Trans } from "react-i18next";

export const WhoWeAre: FC<IIntlComponentParams> = ({ t }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <Trans
              i18nKey="whoWeAre.title"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
            />
          </>
        }
        subText={t("whoWeAre.subText", { cd: "ConnectDesk" })}
      />

      <WhoWeAreImg />

      <div className=" grid justify-items-center grid-cols-1 md:grid-cols-10 max-w-6xl mx-auto gap-2.5">
        <h6 className="col-span-2 w-full text-center md:text-start text-xl md:text-3xl font-semibold">
          {t("whoWeAre.whoWeAre")}
        </h6>

        <p className="col-span-8 w-full text-justify md:text-start text-base md:text-xl text-[#797979]">
          {t("whoWeAre.aboutPara", { cd: "ConnectDesk" })}
        </p>
      </div>
    </Container>
  </MainContainer>
);
