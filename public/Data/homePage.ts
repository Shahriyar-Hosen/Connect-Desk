import { ICorporateSupport, IFeatures, IPackages } from "@/Interface";
import {
  POSSoftware,
  accounting,
  easySale,
  emailSupport,
  flexible,
  phoneSupport,
  purchase,
  report,
  sell,
  stock,
  support,
} from "@/public/assets/icon";

export const solutions: {
  title: string;
}[] = [
  {
    title: "Track all types of Income & Expense",
  },
  {
    title: "Inventory Tracking",
  },
  {
    title: "Real Time Financial Report",
  },
  {
    title: "Dynamic Dashboard",
  },
  {
    title: "99.99% Data Security & Backup",
  },
  {
    title: "Works on Mobile & Desktop",
  },
  {
    title: "24/7 Corporate Support",
  },
  {
    title: "Synchronized Online & Apps",
  },
  {
    title: "Simplified Module Design",
  },
  {
    title: "Affordable Price",
  },
  {
    title: "Access From Anywhere",
  },
  {
    title: "User-Friendly Interface",
  },
];

export const featuresData: IFeatures[] = [
  {
    icon: easySale,
    title: "Easy Sale & Invoice Create",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: stock,
    title: "Stock Management",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: accounting,
    title: "Easy Accounting",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: POSSoftware,
    title: "Perfect POS Software",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: report,
    title: "Overall Business Reports",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: sell,
    title: "Sell & Purchase Quotation",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: purchase,
    title: "Purchase Order",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: flexible,
    title: "Flexible Planning",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
  {
    icon: support,
    title: "Corporate Support",
    des: "ConnectDesk software not only assists you in managing your business but also helps you to grow your parallelly.",
  },
];

export const packagesData: IPackages[] = [
  {
    title: "Business Package",
    duration: "Per business / 12 months",
    price: "7,500",
    features: [
      "Online Software and Mobile Apps",
      "Product, Sales, Purchase, Expenses, Quotations",
      "Online Order",
      "Service Sale",
      "Staff Salary",
      "Voucher, User, Settings",
      "Setting, 50+ Reports",
      "User Manual, Video, Tutorial",
      "100+ Business Reports + Daily Email + SMS Reports",
      "Online Store",
      "Data Security and Help Menu Professional Support",
    ],
  },
  {
    title: "Corporate Package",
    duration: "Per business / 12 months",
    price: "19,999",
    features: [
      "Account Management",
      "Inventory Management",
      "Office HR and Payroll",
      "Attendance",
      "CRM",
      "Employee Management",
      "Setting, 100+ Reports",
      "Daily Reports by Email and Message",
      "100+ Business Reports + Daily Email + SMS Reports",
      "24/7 Corporate Support Online",
      "Data Security and Auto Backup Daily",
    ],
  },
];

export const corporateSupport: ICorporateSupport[] = [
  {
    title: "24/7 Free Phone Support",
    img: phoneSupport,
  },
  {
    title: "24/7 Free Email Support",
    img: emailSupport,
  },
];
