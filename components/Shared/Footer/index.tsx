"use client";

import { IClassName, IIntlComponentParams } from "@/Interface";
import { CommonText, Container } from "@/components";
import { FC } from "react";
import { MainFooterContainer } from "./MainFooterContainer";

export const Footer: FC<IClassName & IIntlComponentParams> = ({
  className,
  t,
}) => (
  <footer className={className}>
    <section className="bg-gradient-to-t to-base-200 from-base-100 pt-[60px]">
      <MainFooterContainer t={t} />

      <div className="border-t border-primary">
        <Container className="flex justify-between items-center pt-5 pb-6">
          <CommonText>
            Copyright &copy; {new Date().getFullYear()} ConnectDesk
          </CommonText>
          <CommonText>All rights reserved</CommonText>
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
