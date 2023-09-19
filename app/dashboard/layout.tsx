import { IChildren } from "@/Interface";
import { Header, Sidebar } from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect Desk | Dashboard",
  description: "Generated by Baitul Hikmah Team",
};

const DashboardLayout = ({ children }: IChildren) => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar />

    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default DashboardLayout;
