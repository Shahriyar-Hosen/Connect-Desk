"use client";

import { IIntlTranslator } from "@/Interface";
import { LinkButton } from "@/components";
import { profile } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";

export const LoginAndSign: FC<IIntlTranslator> = ({ t }) => (
  <div className="hidden md:flex w-fit gap-2">
    <LinkButton link="/login" variant="secondary" size="sm">
      <div className="flex gap-2">
        <Image src={profile} alt="" />
        <div className="h-[20px] w-[2px] bg-primary" />
        {t("header.login")}
      </div>
    </LinkButton>

    <LinkButton link="/register" size="sm" variant="primary">
      {t("header.signUp")}
    </LinkButton>
  </div>
);

export const MobileLoginAndSignUpButton: FC<IIntlTranslator> = ({ t }) => (
  <div className="flex gap-2 md:hidden">
    <LinkButton link="/" variant="secondary" size="sm">
      <div className="flex gap-2">
        <Image src={profile} alt="" />
        <div className="h-[20px] w-[2px] bg-primary"></div>
        {t("header.login")}
      </div>
    </LinkButton>

    <LinkButton link="/" size="sm" variant="primary">
      <div className="flex px-3">
        <div>{t("header.signUp")}</div>
      </div>
    </LinkButton>
  </div>
);
