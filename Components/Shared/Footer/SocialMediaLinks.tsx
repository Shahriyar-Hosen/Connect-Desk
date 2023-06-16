"use client";

import Image from "next/image";
import Link from "next/link";

import { socialMediaLinks } from "@public/Data";
import { FooterTitle } from ".";

export const SocialMediaLinks = () => (
  <div className="mb-5 xl:mb-0">
    <FooterTitle className="mb-3">Social Media Links</FooterTitle>

    <div className="flex justify-start items-center gap-4">
      {socialMediaLinks.map(({ icon, link, title }) => (
        <Link href={link} key={title}>
          <Image src={icon} alt="icon" />
        </Link>
      ))}
    </div>
  </div>
);
