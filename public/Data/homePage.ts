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
    title: "perfectSolution.solutions.trackIncomeExpense",
  },
  {
    title: "perfectSolution.solutions.inventoryTracking",
  },
  {
    title: "perfectSolution.solutions.realTimeFinancialReport",
  },
  {
    title: "perfectSolution.solutions.dynamicDashboard",
  },
  {
    title: "perfectSolution.solutions.dataSecurityBackup",
  },
  {
    title: "perfectSolution.solutions.worksMobileDesktop",
  },
  {
    title: "perfectSolution.solutions.corporateSupport",
  },
  {
    title: "perfectSolution.solutions.synchronizedOnlineApps",
  },
  {
    title: "perfectSolution.solutions.simplifiedModuleDesign",
  },
  {
    title: "perfectSolution.solutions.affordablePrice",
  },
  {
    title: "perfectSolution.solutions.accessFromAnywhere",
  },
  {
    title: "perfectSolution.solutions.userFriendlyInterface",
  },
];

export const featuresData: IFeatures[] = [
  {
    icon: easySale,
    title: "importantFeatures.features.easySale",
    des: "importantFeatures.features.easySaleDes",
  },
  {
    icon: stock,
    title: "importantFeatures.features.stock",
    des: "importantFeatures.features.stockDes",
  },
  {
    icon: accounting,
    title: "importantFeatures.features.accounting",
    des: "importantFeatures.features.accountingDes",
  },
  {
    icon: POSSoftware,
    title: "importantFeatures.features.POSSoftware",
    des: "importantFeatures.features.POSSoftwareDes",
  },
  {
    icon: report,
    title: "importantFeatures.features.report",
    des: "importantFeatures.features.reportDes",
  },
  {
    icon: sell,
    title: "importantFeatures.features.sell",
    des: "importantFeatures.features.sellDes",
  },
  {
    icon: purchase,
    title: "importantFeatures.features.purchase",
    des: "importantFeatures.features.purchaseDes",
  },
  {
    icon: flexible,
    title: "importantFeatures.features.flexible",
    des: "importantFeatures.features.flexibleDes",
  },
  {
    icon: support,
    title: "importantFeatures.features.support",
    des: "importantFeatures.features.supportDes",
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
