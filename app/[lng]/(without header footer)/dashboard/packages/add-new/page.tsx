"use client";

import { PackagesForm } from "@/components/Dashboard";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AddNew: NextPage = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <section className="flex flex-col justify-center items-start mt-10">
      <h1 className="text-xl lg:text-2xl font-bold mb-10">Add Package</h1>
      <PackagesForm />
    </section>
  );
};

export default AddNew;
