import { CommonText, Container } from "@Components/Common";
import MainContainer from "./MainContainer";

export const Footer = () => (
  <footer className="bg-gradient-to-t to-[#fbf5f3] from-[#cbe0da] pt-[60px]">
    <MainContainer />

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
export * from "./MainContainer";
export * from "./SocialMediaLinks";
