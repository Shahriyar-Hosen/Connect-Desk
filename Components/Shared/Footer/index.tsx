import Image from "next/image";
import Link from "next/link";

import { CommonText, Container, Logo } from "@Components/Common";
import { contactInfo, info, socialMediaLinks } from "@public/Data";
import { appStore, playStore } from "@public/assets/images";

export const Footer = () => (
  <footer className="bg-gradient-to-t to-[#fbf5f3] from-[#cbe0da] pt-[60px]">
    <Container>
      <div className="flex justify-center xl:justify-between items-center gap-[100%] xl:gap-2 md:gap-[7%] flex-wrap">
        <div className="w-full lg:w-auto mb-8 xl:mb-[58px] flex lg:block flex-col justify-center items-center">
          <div className="flex flex-col gap-4 mb-9">
            <Logo />

            <CommonText size="sm">
              ConnectDesk is a software development company. The <br /> company
              works with business solutions for SME traders.
            </CommonText>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h5 className="font-semibold text-sm">Contact Info</h5>
            <div className="flex flex-col gap-[10px]">
              {contactInfo.map(({ icon, number, time, title }, i) => (
                <div
                  key={i}
                  className="flex justify-start items-center gap-[10px]"
                >
                  <Image src={icon} alt="" />
                  <CommonText>
                    {title}: {number} ({time})
                  </CommonText>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-0 xl:mt-10 w-auto">
          {info.map(({ name, option }, i) => (
            <div key={i}>
              <h5 className="font-semibold text-xl mb-6">{name}</h5>

              <div className="flex flex-col justify-center items-start gap-3">
                {option.map(({ link, title }, i) => (
                  <Link href={link} key={i}>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 xl:mt-[60px] w-full lg:w-auto flex xl:block flex-col justify-center items-center">
          <h5 className="font-semibold text-xl mb-3">Download App</h5>
          <div className="mb-10">
            <div className="flex justify-start items-center w-full">
              <Image className="w-[50%] h-auto" src={playStore} alt="" />
              <Image className="w-[50%] h-auto" src={appStore} alt="" />
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-xl mb-3">Social Media Links</h5>

            <div className="flex justify-start items-center gap-4">
              {socialMediaLinks.map(({ icon, link, title }) => (
                <Link href={link} key={title}>
                  <Image src={icon} alt="icon" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>

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
