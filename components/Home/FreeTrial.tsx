"use client";

import { freeTrial } from "@/public/assets/images";
import { FC } from "react";
import {
  BackgroundImage,
  Button,
  CommonText,
  Container,
  MainContainer,
} from "..";
import { IIntlTranslator } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";

export const FreeTrial = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "index");
  return (
    <MainContainer>
      <Container className="flex justify-center items-center -mt-1 mb-7">
        <BackgroundImage
          img={freeTrial}
          className="w-fit sm:w-full sm:h-fit max-h-full sm:max-h-[150px] max-w-[980px] px-5 sm:px-20 pb-5 sm:pb-[25px] pt-6 sm:pt-[30px]"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-[10px]">
            <div className="flex flex-col justify-center items-center sm:items-start gap-1 sm:gap-2.5 freeTrail">
              <h6 className="text-primary text-center sm:text-start">
                {t("freeTrial.oneTool")}
              </h6>
              <h6 className="text-primary text-center sm:text-start">
                {t("freeTrial.getStarted")}
              </h6>
              <CommonText text="sm" className="pt-1 text-center sm:text-start">
                {t("freeTrial.trialForFree")}
              </CommonText>
            </div>
            <div>
              <Button variant="primary">{t("freeTrial.buttonLevel")}</Button>
            </div>
          </div>
        </BackgroundImage>
      </Container>
    </MainContainer>
  );
};
