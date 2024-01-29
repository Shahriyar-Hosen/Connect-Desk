"use client";

import { Header, Table } from "@/components/Dashboard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC } from "react";

const Packages: FC = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <main>
      <Header title="Packages" link="/dashboard/packages/add-new" />
      <Table />
    </main>
  );
};

export default Packages;
