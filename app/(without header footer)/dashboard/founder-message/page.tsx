"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const FounderMessage: FC = () => (
  <main>
    <Header title="Founder Message" link="/dashboard/founder-message" />
    <Table />
  </main>
);

export default FounderMessage;
