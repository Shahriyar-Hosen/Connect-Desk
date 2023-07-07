import { IContactInfo, IInfo } from "@Interface";
import { instagram, phone, twitter, web, youtube } from "@public/assets/icon";

export const contactInfo: IContactInfo[] = [
  {
    icon: phone,
    title: "Sales",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
  {
    icon: phone,
    title: "Support 1",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
  {
    icon: phone,
    title: "Support 2",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
  {
    icon: phone,
    title: "IP Phone",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
];

export const location: string = "Dhanmondi 32, Dhaka - 1200, Bangldesh";

export const infoData: IInfo[] = [
  {
    name: "Company",
    option: [
      {
        title: "About us",
        link: "/about-us",
      },
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "Contact us",
        link: "/contact-us",
      },
      {
        title: "Pricing",
        link: "/pricing",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    name: "Support",
    option: [
      {
        title: "Terms & Conditions",
        link: "/terms-and-condition",
      },
      {
        title: "Privacy policy",
        link: "/privacy-policy",
      },
      {
        title: "Refund & Return Policy",
        link: "/refund-and-return-policy",
      },
      {
        title: "App Install",
        link: "/app-install",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    title: "Instagram",
    link: "/",
    icon: instagram,
  },
  {
    title: "Web",
    link: "/",
    icon: web,
  },
  {
    title: "Twitter",
    link: "/",
    icon: twitter,
  },
  {
    title: "YouTube",
    link: "/",
    icon: youtube,
  },
];
