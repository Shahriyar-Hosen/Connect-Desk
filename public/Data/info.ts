import { IContactInfo, IInfo } from "@/Interface";
import { instagram, phone, twitter, web, youtube } from "../assets/icon";

export const contactInfo: IContactInfo[] = [
  {
    icon: phone,
    title: "footer.contactOptions.sales.title",
    number: "footer.contactOptions.sales.number",
    time: "footer.contactOptions.sales.time",
  },
  {
    icon: phone,
    title: "footer.contactOptions.supportOne.title",
    number: "footer.contactOptions.supportOne.number",
    time: "footer.contactOptions.supportOne.time",
  },
  {
    icon: phone,
    title: "footer.contactOptions.supportTwo.title",
    number: "footer.contactOptions.supportTwo.number",
    time: "footer.contactOptions.supportTwo.time",
  },
  {
    icon: phone,
    title: "footer.contactOptions.IPPhone.title",
    number: "footer.contactOptions.IPPhone.number",
    time: "footer.contactOptions.IPPhone.time",
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
