"use client";

import { Button } from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { download } from "@public/assets/icon";
import Image from "next/image";

const ClientList = () => (
  <main>
    <PageHeader
      mainTitle={
        <>
          Client <span className="text-primary">List</span>
        </>
      }
      pageName="Client List"
    />

    <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-[26px] font-semibold text-center">Client List</h1>

      <Button
        text="14"
        variant="primary"
        className="flex justify-center items-center gap-2.5"
      >
        <Image src={download} alt="Client List Download icon" />
        Download
      </Button>
    </div>
  </main>
);

export default ClientList;
