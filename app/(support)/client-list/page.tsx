"use client";

import { Button } from "@Components/Common";
import PageHeader from "@Components/PageHeader";

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

    <div>
      <h1 className="text-[26px] font-semibold text-center">Client List</h1>

      <Button text="14" variant="primary">
        Download
      </Button>
    </div>
  </main>
);

export default ClientList;
