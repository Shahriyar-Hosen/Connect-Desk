"use client";

import { IIntlTranslator } from "@/Interface";
import { FC } from "react";
import { Trans } from "react-i18next";
import { ComponentHeader, Container, MainContainer } from ".";
import { PackagesCards } from "..";

export const Packages: FC<IIntlTranslator> = ({ t }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <Trans
            i18nKey="packages.title"
            components={{
              primarySpanTag: <span className="text-primary" />,
              secondarySpanTag: <span className="text-secondary" />,
            }}
            t={t}
          />
        }
        subTitle={
          <Trans
            i18nKey="packages.business"
            components={{
              primarySpanTag: <span className="text-primary" />,
              secondarySpanTag: <span className="text-secondary" />,
            }}
            t={t}
          />
        }
      />

      <PackagesCards t={t} />
    </Container>
  </MainContainer>
);
