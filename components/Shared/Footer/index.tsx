"use client";

import { IClassName, IIntlLang, IIntlTranslator } from "@/Interface";
import { CommonText, Container } from "@/components";
import { FC } from "react";
import { MainFooterContainer } from "./MainFooterContainer";

export const Footer: FC<IClassName & IIntlTranslator & IIntlLang> = ({
  t,
  lng,
  className,
}) => (
  <footer className={className}>
    <section className="bg-gradient-to-t to-base-200 from-base-100 pt-[60px]">
      <MainFooterContainer lng={lng} t={t} />

      <div className="border-t border-primary">
        <Container className="flex justify-between items-center pt-5 pb-6">
          <CommonText>
            {t("footer.copyright.title")} &copy;&nbsp;
            {t(`footer.copyright.year.${new Date().getFullYear()}`)}&nbsp;
            {t("footer.copyright.company")}
          </CommonText>
          <CommonText>{t("footer.copyright.allRightsReserved")}</CommonText>
        </Container>
      </div>
    </section>
  </footer>
);

export * from "./CompanySupport";
export * from "./ContactDetails";
export * from "./ContactInfo";
export * from "./DownloadApp";
export * from "./FooterTitle";
export * from "./MainFooterContainer";
export * from "./SocialMediaLinks";
