"use client";

import { IIntlParams, IWrapper } from "@/Interface";
import { FC } from "react";
import { Footer, Header } from ".";
import { useTranslation } from "@/app/i18n/client";

export const Wrapper: FC<IWrapper & IIntlParams> = ({
  header,
  footer,
  children,
  className,
  params: { lng },
}) => {
  const { t } = useTranslation(lng, "common");
  return (
    <main className={className}>
      <Header lng={lng} t={t} className={header ? "hidden" : "block"} />
      {children}
      <Footer t={t} className={footer ? "hidden" : "block"} />
    </main>
  );
};
