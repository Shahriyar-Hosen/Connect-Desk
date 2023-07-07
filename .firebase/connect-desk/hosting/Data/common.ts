import { INavItems } from "@Interface";

export const support: INavItems[] = [
  {
    label: "Software Setup",
    link: "/software-setup",
  },
  {
    label: "App Install",
    link: "/app-install",
  },
  {
    label: "Video Tutorial",
    link: "/video-tutorial",
  },
  {
    label: "User Guide",
    link: "/user-guide",
  },
  {
    label: "Hardware",
    link: "/hardware",
  },
  {
    label: "Client List",
    link: "/client-list",
  },
];

export const service: INavItems[] = [
  {
    label: "Inventory Software",
    link: "/inventory-software",
  },
  {
    label: "POS Inventory Software",
    link: "/pos-inventory-software",
  },
  {
    label: "Accounting Software",
    link: "/accounting-software",
  },
  {
    label: "ERP Software",
    link: "/erp-software",
  },
  {
    label: "Billing Software",
    link: "/billing-software",
  },
  {
    label: "Hr & Payroll Software",
    link: "/hr-payroll-software",
  },
  {
    label: "E-Commerce Software",
    link: "/e-commerce-software",
  },
];

export const more: INavItems[] = [
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Message From Founder",
    link: "/message-from-founder",
  },
  {
    label: "Terms and Condition",
    link: "/terms-and-condition",
  },
  {
    label: "Refund and Return Policy",
    link: "/refund-and-return-policy",
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Company Info",
    link: "/company-info",
  },
  {
    label: "Q&A",
    link: "/faq",
  },
  {
    label: "Portfolio",
    link: "/portfolio",
  },
];

export const navItems: INavItems[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Features",
    link: "/features",
  },
  {
    label: "Packages",
    link: "/packages",
  },
  {
    label: "Services",
    link: "/services",
    option: service,
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
  {
    label: "Support",
    link: "",
    option: support,
  },
  {
    label: "More",
    link: "",
    option: more,
  },
];
