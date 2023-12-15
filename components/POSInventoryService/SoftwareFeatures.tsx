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

export const SoftwareFeatures: FC<IIntlTranslator & IIntlLang> = ({
  t,
  lng,
}) => (
  <MainContainer>
    <Container>
      <ComponentHeader
        title={
          <>
            <ConnectDesk lng={lng} text="xl" />
            {t("POSSoftware.POSSoftware", { ns: "services" })}
          </>
        }
        subTitle={t("POSSoftware.featuresAtAGlance", { ns: "services" })}
      />

      <AllFeatures lng={lng} />
    </Container>
  </MainContainer>
);
