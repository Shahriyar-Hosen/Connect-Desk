"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const Packages: FC = () => (
  <main>
    <Header title="Packages" link="/dashboard/packages" />
    <Table />
  </main>
);

export default Packages;
