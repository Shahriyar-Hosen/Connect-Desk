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

export const info: IInfo[] = [
  {
    name: "Company",
    option: [
      {
        title: "About us",
        link: "/",
      },
      {
        title: "Blog",
        link: "/",
      },
      {
        title: "Contact us",
        link: "/",
      },
      {
        title: "Pricing",
        link: "/",
      },
      {
        title: "FAQ",
        link: "/",
      },
    ],
  },
  {
    name: "Support",
    option: [
      {
        title: "Terms & Conditions",
        link: "/",
      },
      {
        title: "Privacy policy",
        link: "/",
      },
      {
        title: "Refund & Return Policy",
        link: "/",
      },
      {
        title: "App Install",
        link: "/",
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
