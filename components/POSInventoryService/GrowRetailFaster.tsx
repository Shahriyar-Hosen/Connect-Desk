"use client";

import { growRetailFaster } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";
import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "..";
import { IIntlTranslator } from "@/Interface";
import { Trans } from "react-i18next";

export const GrowRetailFaster: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer bg="secondary">
    <Container className="flex justify-center items-center flex-col">
      <ComponentHeader
        title={t("POSSoftware.GrowRetailFaster.title", { ns: "services" })}
        subTitle={
          <>
            <Trans
              i18nKey="POSSoftware.GrowRetailFaster.subTitle"
              components={{
                cd: <ConnectDesk text="lg" />,
              }}
              t={t}
              ns={"services"}
            />
          </>
        }
      />

      <CommonText text="sm" className="mt-4 max-w-[521px] text-center">
        {t("POSSoftware.GrowRetailFaster.para", {
          ns: "services",
          cd: "ConnectDesk",
        })}
      </CommonText>

      <Image
        src={growRetailFaster}
        className="-mt-[30px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[135px] lg:-mb-16"
        alt="Grow Your Retail Faster With Smart POS Software"
      />
    </Container>
  </MainContainer>
);
