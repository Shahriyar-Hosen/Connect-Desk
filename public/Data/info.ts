import { IContactInfo, IInfo } from "@/Interface";
import { instagram, phone, twitter, web, youtube } from "../assets/icon";

export const contactInfo: IContactInfo[] = [
  {
    icon: phone,
    title: "footer.contactOptions.sales",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
  {
    icon: phone,
    title: "footer.contactOptions.supportOne",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
  {
    icon: phone,
    title: "footer.contactOptions.supportTwo",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
  {
    icon: phone,
    title: "footer.contactOptions.IPPhone",
    number: "+8801234567892",
    time: "10AM - 9PM",
  },
];

export const location: string = "Dhanmondi 32, Dhaka - 1200, Bangldesh";

export const infoData: IInfo[] = [
  {
    name: "footer.infoData.company",
    option: [
      {
        title: "footer.infoData.aboutUs",
        link: "/about-us",
      },
      {
        title: "footer.infoData.blog",
        link: "/blog",
      },
      {
        title: "footer.infoData.contactUs",
        link: "/contact-us",
      },
      {
        title: "footer.infoData.pricing",
        link: "/packages",
      },
      {
        title: "footer.infoData.FAQ",
        link: "/faq",
      },
    ],
  },
  {
    name: "footer.infoData.support",
    option: [
      {
        title: "footer.infoData.terms&Conditions",
        link: "/terms-and-condition",
      },
      {
        title: "footer.infoData.privacyPolicy",
        link: "/privacy-policy",
      },
      {
        title: "footer.infoData.refund&ReturnPolicy",
        link: "/refund-and-return-policy",
      },
      {
        title: "footer.infoData.appInstall",
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
