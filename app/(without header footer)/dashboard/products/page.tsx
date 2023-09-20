"use client";

import { Header } from "@/components/Dashboard";
import { FC } from "react";

const Products: FC = () => (
  <main>
    <Header title="Product" link="/dashboard/products" />
    <h1>Product</h1>
  </main>
);

export default Products;
