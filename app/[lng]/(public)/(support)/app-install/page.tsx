"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { AppInstallContent, Container, MainContainer } from "@/components";
import { appInstalImg } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";

const AppInstall: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "app-install"]);
  return (
    <main>
      <MainContainer>
        <Container className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-[15%] md:gap-[5%] xl:gap-[15%]">
          <AppInstallContent t={t} />

          <Image
            src={appInstalImg}
            className="w-[70%] sm:w-[80%] md:w-[50%] xl:w-fit"
            alt=""
          />
        </Container>
      </MainContainer>
    </main>
  );
};

export default AppInstall;
