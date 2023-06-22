import { IList, IPOSInventoryService } from "@Interface";
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
} from "@public/assets/images";

export const posInventoryServicesData: IPOSInventoryService[] = [
  {
    icon: receipt,
    title: "Quick Billing Invoice",
  },
  {
    icon: invoices,
    title: "Product Stock Report",
  },
  {
    icon: invoice,
    title: "Daily Paid and Due Sales Report",
  },
  {
    icon: accountingBook,
    title: "Product Purchase Report Date Wise",
  },
  {
    icon: bill,
    title: "Expense  List Report",
  },
  {
    icon: parcel,
    title: "Product Return by Customer",
  },
  {
    icon: report,
    title: "Daily Sales Profit Loss Report",
  },
  {
    icon: sms,
    title: "Daily Reports Via Mobile SMS",
  },
  {
    icon: bank,
    title: "Bank Transaction List & Report",
  },
  {
    icon: calculator,
    title: "Customer and Supplier Ledger",
  },
  {
    icon: printer,
    title: "Report Printing",
  },
  {
    icon: barcode,
    title: "Auto Barcode Generator",
  },
  {
    icon: data,
    title: "Daily Auto & Manual Backup",
  },
  {
    icon: scanning,
    title: "Barcode Scanner for Easy Trannsaction",
  },
  {
    icon: videoTutorial,
    title: "Training for User Manual",
  },
];

export const termCondition1: IList[] = [
  {
    label: "After Sending Payment Please Confirm By Email/SMS/Phone Call",
  },
  {
    label:
      "50% Due payment For Ready Software Setup And Training With Same Day",
  },
  {
    label: "50% Advance Payment For Work Order Confirmation.",
    active: true,
  },
  {
    label:
      "If Sending Payment By Bank Please Send Account Number For Confirmation",
  },
];

export const termCondition2: IList[] = [
  {
    label:
      "If Sending Payment By Mobile Banking Please Send Transaction ID With Account",
  },
  {
    label:
      "Yearly Service Charge 2000 Taka (This Charge Added After 1 Year Installation Day)",
  },
  {
    label:
      "Online Support Time Sunday-Thursday (10 Am to 6 Pm) Free By ( TeamViewer/Anydesk).",
  },
];

export const termConditionData = [termCondition1, termCondition2];

export const supportMaintenanceData: IList[] = [
  {
    label: "We Provide Maintenance Service After Deliver",
  },
  {
    label: "Monthly Database And Software Backup",
  },
  {
    label: "Software Security Test",
  },
  {
    label: "Ready Software Any Kind Of Bug Solution",
  },
];

export const supportMaintenanceTraining: IList[] = [
  {
    label: "Unlimited Support Over Phone, Email or Live Chat, Team Viewer",
  },
  {
    label: "Video / Online Training : Free",
  },
  {
    label:
      "Note : After Deliver New Features /  Module Development is not include Maintenance",
    active: true,
  },
];
