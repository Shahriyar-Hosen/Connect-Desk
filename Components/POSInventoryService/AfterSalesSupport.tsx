"use client";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  ListItem,
  MainContainer,
} from "@Components/Common";
import { IList } from "@Interface";
import { afterSalesSupport } from "@public/assets/images";
import Image from "next/image";

export const AfterSalesSupport = () => (
  <MainContainer bg="secondary">
    <Container className="flex flex-col justify-center items-center">
      <ComponentHeader
        title="After Sales Support From"
        subTitle={<ConnectDesk text="lg" />}
      />

      <CommonText text="sm" className="text-center max-w-[521px] mx-auto mt-4">
        ConnectDesk Accounting Software Helps Stay On Top Of Your Business
        Finances Without Accounting Knowledge
      </CommonText>

      <Image
        src={afterSalesSupport}
        alt=""
        className="w-[90%] max-w-[374px] lg:hidden mb-5"
      />

      <section className="flex flex-col md:flex-row justify-around lg:justify-evenly items-center w-full max-w-6xl mx-auto gap-5 md:gap-[5%] pb-5 md:pb-0">
        <div className="max-w-[300px]">
          <h6 className="text-primary text-lg font-semibold">Maintenance</h6>
          <div className="mt-4 flex flex-col justify-center items-start gap-1.5">
            {supportMaintenanceData.map(({ label, active }, i) => (
              <ListItem key={i} label={label} active={active} dot="sm" />
            ))}
          </div>
        </div>

        <Image
          src={afterSalesSupport}
          alt=""
          className="max-w-[374px] hidden lg:block"
        />

        <div className="max-w-[300px]">
          <h6 className="text-primary text-lg font-semibold">Maintenance</h6>
          <div className="mt-4 flex flex-col justify-center items-start gap-1.5">
            {supportMaintenanceTraining.map(({ label, active }, i) => (
              <ListItem key={i} label={label} active={active} dot="sm" />
            ))}
          </div>
        </div>
      </section>
    </Container>
  </MainContainer>
);

export const supportMaintenanceData: IList[] = [
  {
    label: "We Provide Maintenance Service After Deliver",
  },
  {
    label: "Monthly Database And Software Backup",
  },
  {
    label: "Software Security Test",
  },
  {
    label: "Ready Software Any Kind Of Bug Solution",
  },
];

export const supportMaintenanceTraining: IList[] = [
  {
    label: "Unlimited Support Over Phone, Email or Live Chat, Team Viewer",
  },
  {
    label: "Video / Online Training : Free",
  },
  {
    label:
      "Note : After Deliver New Features /  Module Development is not include Maintenance",
    active: true,
  },
];
