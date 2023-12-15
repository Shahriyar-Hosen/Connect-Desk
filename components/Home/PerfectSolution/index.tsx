"use client";

import { IIntlTranslator } from "@/Interface";
import { ComponentHeader, Container, MainContainer } from "@/components";
import { solutions } from "@/public/Data";
import { FC } from "react";
import { Trans } from "react-i18next";
import { Solution } from "./Solution";

export const PerfectSolution: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer bg="secondary">
    <Container>
      <ComponentHeader
        title={
          <span>
            <Trans
              i18nKey="perfectSolution.title"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
            />
          </span>
        }
        subTitle={
          <span className="text-secondary">
            {t("perfectSolution.business")}
          </span>
        }
      />

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 gap-y-[60px] justify-items-center mt-[60px]">
        {solutions.map(({ title }, i) => (
          <Solution
            key={i}
            title={
              <Trans i18nKey={t(title)} components={{ br: <br /> }} t={t} />
            }
          />
        ))}
      </section>
    </Container>
  </MainContainer>
);
