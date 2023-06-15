import { CommonText, Logo } from "@Components/Common";
import { contactInfo, info, socialMediaLinks } from "@public/Data";
import { appStore, playStore } from "@public/assets/images";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer>
    <div>
      <div>
        <div>
          <Logo />

          <CommonText size="sm">
            ConnectDesk is a software development company. The company works
            with business solutions for SME traders.
          </CommonText>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h5 className="font-semibold text-sm">Contact Info</h5>
          <div className="flex flex-col gap-1">
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
      <div>
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
      <div>
        <div>
          <h5 className="font-semibold text-xl mb-6">Download App</h5>
          <div className="flex justify-start items-center gap-5">
            <Image src={appStore} alt="" />
            <Image src={playStore} alt="" />
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
  </footer>
);
