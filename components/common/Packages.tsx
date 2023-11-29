"use client";

import { FC } from "react";
import { ComponentHeader, Container, MainContainer } from ".";
import { PackagesCards } from "..";
import { IIntlComponentParams } from "@/Interface";
import { Trans } from "react-i18next";

export const Packages: FC<IIntlComponentParams> = ({ t }) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <Trans
              i18nKey="packages.title"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
            />
          </>
        }
        subTitle={
          <>
            <Trans
              i18nKey="packages.business"
              components={{ spanTag: <span className="text-secondary" /> }}
              t={t}
            />
          </>
        }
      />

      <PackagesCards />
    </Container>
  </MainContainer>
);
