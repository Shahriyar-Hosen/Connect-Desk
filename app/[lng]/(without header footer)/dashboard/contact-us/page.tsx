"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const ContactUs: FC = () => (
  <main>
    <Header title="Contact Us" link="/dashboard/contact-us" />
    <Table />
  </main>
);

export default ContactUs;
