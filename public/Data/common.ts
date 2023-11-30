import { INavItems } from "@/Interface";

export const support: INavItems[] = [
  {
    label: "header.navItems.supportOptions.softwareSetup",
    link: "/software-setup",
  },
  {
    label: "header.navItems.supportOptions.appInstall",
    link: "/app-install",
  },
  {
    label: "header.navItems.supportOptions.videoTutorial",
    link: "/video-tutorial",
  },
  {
    label: "header.navItems.supportOptions.userGuide",
    link: "/user-guide",
  },
  {
    label: "header.navItems.supportOptions.hardware",
    link: "/hardware",
  },
  {
    label: "header.navItems.supportOptions.clientList",
    link: "/client-list",
  },
];

export const service: INavItems[] = [
  {
    label: "header.navItems.servicesOptions.inventorySoftware",
    link: "/inventory-software",
  },
  {
    label: "header.navItems.servicesOptions.POSInventorySoftware",
    link: "/pos-inventory-software",
  },
  {
    label: "header.navItems.servicesOptions.accountingSoftware",
    link: "/accounting-software",
  },
  {
    label: "header.navItems.servicesOptions.ERPSoftware",
    link: "/erp-software",
  },
  {
    label: "header.navItems.servicesOptions.billingSoftware",
    link: "/billing-software",
  },
  {
    label: "header.navItems.servicesOptions.Hr&PayrollSoftware",
    link: "/hr-payroll-software",
  },
  {
    label: "header.navItems.servicesOptions.E-CommerceSoftware",
    link: "/e-commerce-software",
  },
];

export const more: INavItems[] = [
  {
    label: "header.navItems.moreOptions.aboutUs",
    link: "/about-us",
  },
  {
    label: "header.navItems.moreOptions.messageFromFounder",
    link: "/message-from-founder",
  },
  {
    label: "header.navItems.moreOptions.termsAndCondition",
    link: "/terms-and-condition",
  },
  {
    label: "header.navItems.moreOptions.refundAndReturnPolicy",
    link: "/refund-and-return-policy",
  },
  {
    label: "header.navItems.moreOptions.privacyPolicy",
    link: "/privacy-policy",
  },
  {
    label: "header.navItems.moreOptions.companyInfo",
    link: "/company-info",
  },
  {
    label: "header.navItems.moreOptions.Q&A",
    link: "/faq",
  },
  {
    label: "header.navItems.moreOptions.portfolio",
    link: "/portfolio",
  },
];

export const navItems: INavItems[] = [
  {
    label: "header.navItems.home",
    link: "/",
  },
  {
    label: "header.navItems.features",
    link: "/features",
  },
  {
    label: "header.navItems.packages",
    link: "/packages",
  },
  {
    label: "header.navItems.services",
    link: "/services",
    option: service,
  },
  {
    label: "header.navItems.blogs",
    link: "/blogs",
  },
  {
    label: "header.navItems.support",
    link: "",
    option: support,
  },
  {
    label: "header.navItems.more",
    link: "",
    option: more,
  },
];
