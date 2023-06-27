"use client";

import { ListOfClient } from "@Components/ClientList";
import { Button, Container } from "@Components/Common";
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

    <Container>
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center mt-[50px]">
        <h1 className="text-lg md:text-[26px] font-semibold text-center">
          Client List
        </h1>

        <Button
          text="14"
          size="sm"
          variant="primary"
          className="flex justify-center items-center gap-2.5"
        >
          <Image src={download} alt="Client List Download icon" />
          Download
        </Button>
      </div>
    </Container>

    <ListOfClient />
  </main>
);

export default ClientList;
