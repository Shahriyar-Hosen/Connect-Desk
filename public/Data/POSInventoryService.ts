import { IPOSInventoryService } from "@Interface";
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
