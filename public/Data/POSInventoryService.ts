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
