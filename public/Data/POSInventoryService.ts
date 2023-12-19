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
    label: "posInventoryServicesData.QuickBillingInvoice",
  },
  {
    icon: invoices,
    label: "posInventoryServicesData.ProductStockReport",
  },
  {
    icon: invoice,
    label: "posInventoryServicesData.DailyPaidandDueSalesReport",
  },
  {
    icon: accountingBook,
    label: "posInventoryServicesData.ProductPurchaseReportDateWise",
  },
  {
    icon: bill,
    label: "posInventoryServicesData.ExpenseListReport",
  },
  {
    icon: parcel,
    label: "posInventoryServicesData.ProductReturnbyCustomer",
  },
  {
    icon: report,
    label: "posInventoryServicesData.DailySalesProfitLossReport",
  },
  {
    icon: sms,
    label: "posInventoryServicesData.DailyReportsViaMobileSMS",
  },
  {
    icon: bank,
    label: "posInventoryServicesData.BankTransactionListReport",
  },
  {
    icon: calculator,
    label: "posInventoryServicesData.CustomerandSupplierLedger",
  },
  {
    icon: printer,
    label: "posInventoryServicesData.ReportPrinting",
  },
  {
    icon: barcode,
    label: "posInventoryServicesData.AutoBarcodeGenerator",
  },
  {
    icon: data,
    label: "posInventoryServicesData.DailyAutoManualBackup",
  },
  {
    icon: scanning,
    label: "posInventoryServicesData.BarcodeScannerforEasyTrannsaction",
  },
  {
    icon: videoTutorial,
    label: "posInventoryServicesData.TrainingforUserManual",
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
