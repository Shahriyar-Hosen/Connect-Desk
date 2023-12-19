"use client";

import { CategoryForm } from "@/components/Dashboard";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AddNew: NextPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });
  return (
    <section className="flex flex-col justify-center items-start mt-10">
      <h1 className="text-xl lg:text-2xl font-bold mb-10">Add Category</h1>
      <CategoryForm />
    </section>
  );
};

export default AddNew;
