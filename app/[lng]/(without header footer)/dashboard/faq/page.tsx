"use client";

import { Header, Table } from "@/components/Dashboard";
import { NextPage } from "next";

const Faq: NextPage = () => (
  <main>
    <Header title="FAQ" link="/dashboard/faq/add-new" />
    <Table />
  </main>
);

export default Faq;
