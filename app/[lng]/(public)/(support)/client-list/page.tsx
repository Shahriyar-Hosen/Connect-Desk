"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import { Button, Container, ListOfClient, PageHeader } from "@/components";
import { download } from "@/public/assets/icon";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next";

const ClientList: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "client-list"]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "client-list" })}
        mainTitle={
          <>
            <Trans
              i18nKey="mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"client-list"}
            />
          </>
        }
      />

      <Container>
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center mt-[50px]">
          <h1 className="text-lg md:text-[26px] font-semibold text-center">
            {t("ClientList", { ns: "client-list" })}
          </h1>

          <Button
            text="14"
            size="sm"
            variant="primary"
            className="flex justify-center items-center gap-2.5"
          >
            <Image src={download} alt="Client List Download icon" />
            {t("Download", { ns: "client-list" })}
          </Button>
        </div>
      </Container>

      <ListOfClient />
    </main>
  );
};

export default ClientList;
