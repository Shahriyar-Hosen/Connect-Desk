"use client";

import { Header, Table } from "@/components/Dashboard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC } from "react";

const ContactUs: FC = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });

  return (
    <main>
      <Header title="Contact Us" link="/dashboard/contact-us" />
      <Table />
    </main>
  );
};

export default ContactUs;
