"use client";

import { FaqForm } from "@/components/Dashboard";
import { NextPage } from "next";

const AddNew: NextPage = () => (
  <section className="flex flex-col justify-center items-start mt-10">
    <h1 className="text-xl lg:text-2xl font-bold mb-10">Add FAQ</h1>
    <FaqForm />
  </section>
);

export default AddNew;
