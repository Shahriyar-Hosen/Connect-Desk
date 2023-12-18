import { ILabelAndIcon, IList } from "@/Interface";
import {
  accountingBook,
  bank,
  barcode,
  bill,
  calculator,
  data,
  invoice,
  invoices,
  parcel,
  printer,
  receipt,
  report,
  scanning,
  sms,
  videoTutorial,
} from "@/public/assets/images";
import { email, phoneLg, whatsApp } from "../assets/icon";

export const posInventoryServicesData: ILabelAndIcon[] = [
  {
    icon: receipt,
    label: "Quick Billing Invoice",
  },
  {
    icon: invoices,
    label: "Product Stock Report",
  },
  {
    icon: invoice,
    label: "Daily Paid and Due Sales Report",
  },
  {
    icon: accountingBook,
    label: "Product Purchase Report Date Wise",
  },
  {
    icon: bill,
    label: "Expense  List Report",
  },
  {
    icon: parcel,
    label: "Product Return by Customer",
  },
  {
    icon: report,
    label: "Daily Sales Profit Loss Report",
  },
  {
    icon: sms,
    label: "Daily Reports Via Mobile SMS",
  },
  {
    icon: bank,
    label: "Bank Transaction List & Report",
  },
  {
    icon: calculator,
    label: "Customer and Supplier Ledger",
  },
  {
    icon: printer,
    label: "Report Printing",
  },
  {
    icon: barcode,
    label: "Auto Barcode Generator",
  },
  {
    icon: data,
    label: "Daily Auto & Manual Backup",
  },
  {
    icon: scanning,
    label: "Barcode Scanner for Easy Trannsaction",
  },
  {
    icon: videoTutorial,
    label: "Training for User Manual",
  },
];

export const termCondition1: IList[] = [
  {
    label: "POSSoftware.termCondition.afterSendingPayment",
  },
  {
    label: "POSSoftware.termCondition.setupAndTraining",
  },
  {
    label: "POSSoftware.termCondition.workOrderConfirmation",
    active: true,
  },
  {
    label: "POSSoftware.termCondition.paymentByBank",
  },
];

export const termCondition2: IList[] = [
  {
    label: "POSSoftware.termCondition.mobileBanking",
  },
  {
    label: "POSSoftware.termCondition.yearlyServiceCharge",
  },
  {
    label: "POSSoftware.termCondition.onlineSupportTime",
  },
];

export const termConditionData = [termCondition1, termCondition2];

export const supportMaintenanceData: IList[] = [
  {
    label: "POSSoftware.afterSalesSupport.maintenanceService",
  },
  {
    label: "POSSoftware.afterSalesSupport.monthlyBackup",
  },
  {
    label: "POSSoftware.afterSalesSupport.securityTest",
  },
  {
    label: "POSSoftware.afterSalesSupport.bugSolution",
  },
  {
    label: "POSSoftware.afterSalesSupport.performance",
  },
];

export const supportMaintenanceTraining: IList[] = [
  {
    label: "POSSoftware.afterSalesSupport.unlimitedSupport",
  },
  {
    label: "POSSoftware.afterSalesSupport.onlineTraining",
  },
  {
    label: "POSSoftware.afterSalesSupport.excludeMaintenance",
    active: true,
  },
];

export const customerSupportData: ILabelAndIcon[] = [
  {
    icon: phoneLg,
    label: "0174674XXXX",
  },
  {
    icon: email,
    label: "info@connectdesk.com.bd",
  },
  {
    icon: whatsApp,
    label: "0174674XXXX",
  },
];
