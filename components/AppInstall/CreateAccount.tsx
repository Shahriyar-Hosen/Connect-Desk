"use client";

import { createAccount } from "@/public/Data";
import { FC } from "react";
import { CommonText, ListItem } from "..";
import { IIntlTranslator } from "@/Interface";

export const CreateAccount: FC<IIntlTranslator> = ({ t }) => (
  <div className="max-w-[431px]">
    <CommonText className="font-medium">
      {t("HowToCreateAccount", { ns: "app-install" })}
    </CommonText>

    <div className="mt-3 md:mt-4 flex flex-col justify-center items-start gap-1">
      {createAccount.map((item) => (
        <ListItem label={t(item, { ns: "app-install" })} key={item} />
      ))}
    </div>
  </div>
);
