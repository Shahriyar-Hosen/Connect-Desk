"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const SubCategory: FC = () => (
  <main>
    <Header title="Sub Category" link="/dashboard/sub-category" />
    <Table />
  </main>
);

export default SubCategory;
