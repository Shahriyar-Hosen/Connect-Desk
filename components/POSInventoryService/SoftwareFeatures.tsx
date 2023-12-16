"use client";

import { FC } from "react";
import {
  AllFeatures,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "..";
import { IIntlLang, IIntlTranslator } from "@/Interface";
import { Trans } from "react-i18next";

export const SoftwareFeatures: FC<IIntlTranslator & IIntlLang> = ({
  t,
  lng,
}) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <Trans
              i18nKey="POSSoftware.featuresAtAGlanceTitle"
              components={{
                CDLogo: <ConnectDesk lng={lng} text="xl" />,
              }}
              t={t}
              ns={"services"}
            />
          </>
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

      <AllFeatures lng={lng} />
    </Container>
  </MainContainer>
);
