"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const Category: FC = () => (
  <main>
    <Header title="Category" link="/dashboard/category/add-new" />
    <Table />
  </main>
);

export default Category;
