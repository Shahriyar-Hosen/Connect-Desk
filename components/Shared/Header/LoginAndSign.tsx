"use client";

import { IIntlTranslator } from "@/Interface";
import { LinkButton } from "@/components";
import { profile } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";

export interface IMobile {
  mobile?: boolean;
}

export const LoginAndSign: FC<IIntlTranslator & IMobile> = ({ t, mobile }) => {
  const Login: FC = () => (
    <LinkButton link="/login" variant="secondary" size="sm">
      <div className="flex gap-2">
        <Image src={profile} alt="" />
        <div className="h-[20px] w-[2px] bg-primary" />
        {t("header.login")}
      </div>
    </LinkButton>
  );
  const SignUp: FC<IMobile> = ({ mobile }) => (
    <LinkButton
      link="/register"
      size="sm"
      variant="primary"
      className={mobile ? "px-5 py-2" : ""}
    >
      {t("header.signUp")}
    </LinkButton>
  );

  return mobile ? (
    <div className="flex gap-2 md:hidden">
      <Login />
      <SignUp mobile />
    </div>
  ) : (
    <div className="hidden md:flex w-fit gap-2">
      <Login />
      <SignUp />
    </div>
  );
};
