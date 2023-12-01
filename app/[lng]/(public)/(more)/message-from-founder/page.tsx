"use client";

import Image from "next/image";

import { CommonText, Container, MainContainer, PageHeader } from "@/components";

import { founder } from "@/public/assets/images";
import { Trans } from "react-i18next";
import { IIntlParams } from "@/Interface";
import { FC } from "react";
import { useTranslation } from "@/app/i18n/client";

const MessageFromFounder: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["more"]);
  return (
    <main>
      <PageHeader
        pageName={t("messageFromFounder.pageName")}
        mainTitle={
          <>
            <Trans
              i18nKey="messageFromFounder.mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"more"}
            />
          </>
        }
      />

      <MainContainer isRemoveMargin>
        <Container>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-start items-center  md:items-start gap-10 md:gap-20 py-5 md:py-0">
            <div className="w-full max-w-[342px] flex flex-col gap-3">
              <div className="border border-primary p-3 w-full rounded-[10px]">
                <Image src={founder} className="w-full rounded-[10px]" alt="" />
              </div>

              <div className="w-full bg-primary font-semibold rounded-[10px] px-[15px] py-3 text-white">
                <span className="text-2xl">MD. Hanif Uddin</span>
                <span className="text-xl">Founder & CEO, ConnectDesk</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-10">
              <div className="w-fit bg-base-100 bg-opacity-50 px-[30px] py-[13px] rounded-[10px] boxShadow">
                <span className="text-primary text-2xl font-semibold">
                  {t("messageFromFounder.messageFromFounder")}
                </span>
              </div>

              <div className="w-fit bg-base-100 bg-opacity-50 px-[30px] py-[13px] rounded-[10px] boxShadow flex flex-col justify-center items-start gap-5 max-w-[610px]">
                <CommonText>
                  <Trans
                    i18nKey="messageFromFounder.messageParaOne"
                    components={{
                      strongTag: <strong />,
                    }}
                    t={t}
                    ns={"more"}
                    values={{ cd: "ConnectDesk" }}
                  />
                </CommonText>
                <CommonText>
                  <Trans
                    i18nKey="messageFromFounder.messageParaTwo"
                    components={{
                      strongTag: <strong />,
                    }}
                    t={t}
                    ns={"more"}
                    values={{ cd: "ConnectDesk" }}
                  />
                </CommonText>
                <CommonText>
                  <Trans
                    i18nKey="messageFromFounder.messageParaThree"
                    components={{
                      strongTag: <strong />,
                    }}
                    t={t}
                    ns={"more"}
                    values={{ cd: "ConnectDesk" }}
                  />
                </CommonText>
              </div>
            </div>
          </div>
        </Container>
      </MainContainer>
    </main>
  );
};

export default MessageFromFounder;
