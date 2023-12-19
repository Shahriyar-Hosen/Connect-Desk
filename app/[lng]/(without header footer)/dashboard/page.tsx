"use client";

import { ConnectDesk } from "@/components";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard: NextPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <main className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-5 mt-5 font-exo">
      <p className="text-2xl lg:text-4xl font-bold text-center">
        <span className="text-primary">Welcome</span>
      </p>
      <p className="text-2xl lg:text-4xl font-bold text-center">to</p>
      <ConnectDesk lng="en" text="xl" />
      <p className="text-2xl lg:text-4xl font-bold text-center">
        Admin <span className="text-secondary">Dashboard</span>
      </p>
    </main>
  );
};

export default Dashboard;
