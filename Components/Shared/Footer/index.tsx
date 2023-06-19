"use client";

import { CommonText, Container } from "@Components/Common";
import MainFooterContainer from "./MainFooterContainer";

export const Footer = () => (
  <footer className="bg-gradient-to-t to-base-200 from-base-100 pt-[60px]">
    <MainFooterContainer />

    <div className="border-t border-primary">
      <Container className="flex justify-between items-center pt-5 pb-6">
        <CommonText>
          Copyright &copy; {new Date().getFullYear()} ConnectDesk
        </CommonText>
        <CommonText>All rights reserved</CommonText>
      </Container>
    </div>
  </footer>
);

export * from "./CompanySupport";
export * from "./ContactDetails";
export * from "./ContactInfo";
export * from "./DownloadApp";
export * from "./FooterTitle";
export * from "./MainFooterContainer";
export * from "./SocialMediaLinks";
