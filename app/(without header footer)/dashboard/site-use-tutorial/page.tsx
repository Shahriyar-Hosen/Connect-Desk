"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const SiteUseTutorial: FC = () => (
  <main>
    <Header title="Site Use Tutorial" link="/dashboard/site-use-tutorial" />
    <Table />
  </main>
);

export default SiteUseTutorial;
