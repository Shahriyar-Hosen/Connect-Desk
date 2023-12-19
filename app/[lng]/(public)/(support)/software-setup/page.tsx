"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import {
  CommonText,
  Container,
  MainContainer,
  PageHeader,
  Video,
} from "@/components";
import { FC } from "react";
import { Trans } from "react-i18next";

const SoftwareSetup: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "software-setup"]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "software-setup" })}
        mainTitle={
          <>
            {" "}
            <Trans
              i18nKey="mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"software-setup"}
            />
          </>
        }
      />

      <MainContainer>
        <Container>
          <CommonText
            className="font-semibold text-center md:-mt-10"
            text="4xl"
          >
            {t("introPara", { ns: "software-setup" })}
          </CommonText>

          <Video
            size="lg"
            className="mt-[50px]"
            url="https://www.youtube.com/embed/o2W8_mvLuxU"
          />
        </Container>
      </MainContainer>
    </main>
  );
};
export default SoftwareSetup;
