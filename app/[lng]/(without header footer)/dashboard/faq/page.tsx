"use client";

import { Header, Table } from "@/components/Dashboard";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Faq: NextPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });
  return (
    <main>
      <Header title="FAQ" link="/dashboard/faq/add-new" />
      <Table />
    </main>
  );
};

export default Faq;
