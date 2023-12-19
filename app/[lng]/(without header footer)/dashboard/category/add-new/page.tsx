"use client";

import { CategoryForm } from "@/components/Dashboard";
import { NextPage } from "next";

const AddNew: NextPage = () => (
  <section className="flex flex-col justify-center items-start mt-10">
    <h1 className="text-xl lg:text-2xl font-bold mb-10">Add Category</h1>
    <CategoryForm />
  </section>
);

export default AddNew;
