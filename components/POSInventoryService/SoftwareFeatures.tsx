"use client";

import { IIntlLang, IIntlTranslator } from "@/Interface";
import { FC } from "react";
import { Trans } from "react-i18next";
import {
  ComponentHeader,
  ConnectDesk,
  Container,
  InventoryServices,
  MainContainer,
} from "..";

export const SoftwareFeatures: FC<IIntlTranslator & IIntlLang> = ({
  t,
  lng,
}) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <Trans
            i18nKey="POSSoftware.featuresAtAGlanceTitle"
            components={{
              CDLogo: <ConnectDesk lng={lng} text="xl" />,
            }}
            t={t}
            ns={"services"}
          />
        }
        subTitle={
          <Trans
            i18nKey="POSSoftware.featuresAtAGlanceSubtitle"
            components={{
              spanTagPrimary: <span className="text-primary" />,
              spanTagSecondary: <span className="text-secondary" />,
            }}
            t={t}
            ns={"services"}
          />
        }
      />

      <InventoryServices t={t} />
    </Container>
  </MainContainer>
);
