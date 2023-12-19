"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { Button, CommonText, Container, MainContainer } from "@/components";
import { userGuide } from "@/public/assets/images";
import Image from "next/image";
import { FC } from "react";

const UserGuide: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["user-guide"]);
  return (
    <main>
      <MainContainer>
        <Container className="flex justify-center items-center flex-col-reverse md:flex-row gap-10 md:gap-20">
          <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-[30px]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {t("UserGuide")}
            </h2>

            <CommonText className="w-full max-w-[432px]">
              {t("AboutUserGuide")}
            </CommonText>

            <Button variant="primary" className="mt-2.5">
              {t("DownloadUserManual")}
            </Button>
          </div>

          <Image
            src={userGuide}
            className="w-[80%] sm:w-[50%] md:max-w-[376px] lg:max-w-[476px] xl:max-w-[576px]"
            alt=""
          />
        </Container>
      </MainContainer>
    </main>
  );
};

export default UserGuide;
