"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const Faq: FC = () => (
  <main>
    <Header title="FAQ" link="/dashboard/faq" />
    <Table />
  </main>
);

export default Faq;
