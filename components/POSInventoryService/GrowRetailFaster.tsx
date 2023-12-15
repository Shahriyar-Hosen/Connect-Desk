"use client";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { growRetailFaster } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next";
import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "..";

export const GrowRetailFaster: FC<IIntlTranslator & IIntlLang> = ({
  t,
  lng,
}) => (
  <MainContainer bg="secondary">
    <Container className="flex justify-center items-center flex-col">
      <ComponentHeader
        title={
          <Trans
            i18nKey="POSSoftware.GrowRetailFaster.title"
            components={{
              cd: <ConnectDesk lng={lng} text="lg" />,
            }}
            t={t}
            ns={"services"}
          />
        }
        subTitle={
          <>
            <Trans
              i18nKey="POSSoftware.GrowRetailFaster.subTitle"
              components={{
                cd: <ConnectDesk lng={lng} text="lg" />,
                spanTagPrimary: <span className="text-primary" />,
                spanTagSecondary: <span className="text-secondary" />,
              }}
              t={t}
              ns={"services"}
            />
          </>
        }
      />

      <CommonText text="sm" className="mt-4 max-w-[521px] text-center">
        <Trans
          i18nKey="POSSoftware.GrowRetailFaster.para"
          components={{
            strong: <strong />,
          }}
          t={t}
          ns={"services"}
        />
      </CommonText>

      <Image
        src={growRetailFaster}
        className="-mt-[30px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[135px] lg:-mb-16"
        alt="Grow Your Retail Faster With Smart POS Software"
      />
    </Container>
  </MainContainer>
);
