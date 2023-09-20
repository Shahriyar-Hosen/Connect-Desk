"use client";

import { ConnectDesk } from "@/components";

const Dashboard = () => (
  <main className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-5 mt-5 font-exo">
    <p className="text-2xl lg:text-4xl font-bold text-center">
      <span className="text-primary">Welcome</span>
    </p>
    <p className="text-2xl lg:text-4xl font-bold text-center">to</p>
    <ConnectDesk text="xl" />
    <p className="text-2xl lg:text-4xl font-bold text-center">
      Admin <span className="text-secondary">Dashboard</span>
    </p>
  </main>
);

export default Dashboard;
