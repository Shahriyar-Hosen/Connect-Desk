"use client";

import { IIntlTranslator } from "@/Interface";
import { termConditionData } from "@/public/Data";
import { termCondition } from "@/public/assets/images";
import { shape1 } from "@/public/assets/shape";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next";
import {
  BackgroundImage,
  CommonText,
  ComponentHeader,
  Container,
  MainContainer,
} from "..";
import { TermConditionCard } from "./TermConditionCard";

export const TermCondition: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer>
    <Container className="flex flex-col  justify-center lg:flex-row lg:justify-around items-center gap-8">
      <div>
        <ComponentHeader
          title={t("POSSoftware.termCondition.title", { ns: "services" })}
          position="start"
        />

        <CommonText text="sm" className="mt-4 max-w-[373px]">
          <Trans
            i18nKey="POSSoftware.termCondition.para"
            components={{
              strong: <strong />,
            }}
            t={t}
            ns={"services"}
          />
        </CommonText>

        <Image src={termCondition} className="max-w-[300px] mt-10" alt="" />
      </div>

      <BackgroundImage
        img={shape1}
        className="w-full max-w-[500px]"
        hidden="sm"
      >
        {termConditionData.map((items, i) => (
          <div
            key={i}
            className={`flex ${
              i % 2 === 0 ? "justify-start" : "justify-end mt-[30px]"
            } items-center`}
          >
            <TermConditionCard termCondition={items} t={t} />
          </div>
        ))}
      </BackgroundImage>
    </Container>
  </MainContainer>
);
