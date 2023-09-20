"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const Products: FC = () => (
  <main>
    <Header title="Products" link="/dashboard/products" />
    <Table />
  </main>
);

export default Products;
