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
  des: string;
}[] = [
  {
    title: "perfectSolution.solutions.trackIncomeExpense",
    des: "perfectSolution.solutions.trackIncomeExpense",
  },
  {
    title: "perfectSolution.solutions.inventoryTracking",
    des: "perfectSolution.solutions.inventoryTracking",
  },
  {
    title: "perfectSolution.solutions.realTimeFinancialReport",
    des: "perfectSolution.solutions.realTimeFinancialReport",
  },
  {
    title: "perfectSolution.solutions.dynamicDashboard",
    des: "perfectSolution.solutions.dynamicDashboard",
  },
  {
    title: "perfectSolution.solutions.dataSecurityBackup",
    des: "perfectSolution.solutions.dataSecurityBackup",
  },
  {
    title: "perfectSolution.solutions.worksMobileDesktop",
    des: "perfectSolution.solutions.worksMobileDesktop",
  },
  {
    title: "perfectSolution.solutions.corporateSupport",
    des: "perfectSolution.solutions.corporateSupport",
  },
  {
    title: "perfectSolution.solutions.synchronizedOnlineApps",
    des: "perfectSolution.solutions.synchronizedOnlineApps",
  },
  {
    title: "perfectSolution.solutions.simplifiedModuleDesign",
    des: "perfectSolution.solutions.simplifiedModuleDesign",
  },
  {
    title: "perfectSolution.solutions.affordablePrice",
    des: "perfectSolution.solutions.affordablePrice",
  },
  {
    title: "perfectSolution.solutions.accessFromAnywhere",
    des: "perfectSolution.solutions.accessFromAnywhere",
  },
  {
    title: "perfectSolution.solutions.userFriendlyInterface",
    des: "perfectSolution.solutions.userFriendlyInterface",
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
    title: "packages.packagesData.businessPackage.title",
    duration: "packages.packagesData.businessPackage.duration",
    price: "packages.packagesData.businessPackage.price",
    features: [
      "packages.packagesData.businessPackage.features.online",
      "packages.packagesData.businessPackage.features.product",
      "packages.packagesData.businessPackage.features.onlineOrder",
      "packages.packagesData.businessPackage.features.serviceSale",
      "packages.packagesData.businessPackage.features.staffSalary",
      "packages.packagesData.businessPackage.features.voucher",
      "packages.packagesData.businessPackage.features.setting",
      "packages.packagesData.businessPackage.features.user",
      "packages.packagesData.businessPackage.features.businessReports",
      "packages.packagesData.businessPackage.features.onlineStore",
      "packages.packagesData.businessPackage.features.dataSecurity",
    ],
  },
  {
    title: "packages.packagesData.corporatePackage.title",
    duration: "packages.packagesData.corporatePackage.duration",
    price: "packages.packagesData.corporatePackage.price",
    features: [
      "packages.packagesData.corporatePackage.features.accountManagement",
      "packages.packagesData.corporatePackage.features.inventoryManagement",
      "packages.packagesData.corporatePackage.features.office",
      "packages.packagesData.corporatePackage.features.attendance",
      "packages.packagesData.corporatePackage.features.CRM",
      "packages.packagesData.corporatePackage.features.employeeManagement",
      "packages.packagesData.corporatePackage.features.setting",
      "packages.packagesData.corporatePackage.features.dailyReports",
      "packages.packagesData.corporatePackage.features.businessReports",
      "packages.packagesData.corporatePackage.features.corporateSupport",
      "packages.packagesData.corporatePackage.features.dataSecurity",
    ],
  },
];

export const corporateSupport: ICorporateSupport[] = [
  {
    title: "support.phoneSupport",
    img: phoneSupport,
  },
  {
    title: "support.emailSupport",
    img: emailSupport,
  },
];
