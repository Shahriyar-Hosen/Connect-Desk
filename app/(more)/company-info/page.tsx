"use client";

import { MainContainer, PageHeader } from "@/components";
import { Wrapper } from "@/components/Shared";
import { certificate } from "@/public/assets/images";
import Image from "next/image";

const CompanyInfo = () => (
  <Wrapper>
    <PageHeader
      pageName="Company Info"
      mainTitle={
        <span>
          Company<span className="text-primary">Info</span>
        </span>
      }
    />
    <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto">
      <MainContainer isRemoveMargin>
        <div className="text-center text-[16px] md:text-[24px] font-semibold">
          <h3 className="mb-2">
            Trade Licence Number : TRAD/DSCC/674766/2023{" "}
          </h3>
          <h3 className="mb-2">VAT Registration Number : BIN: 674766-2023 </h3>
          <h3 className="mb-2">E-TIN : 67567575786 </h3>
        </div>
        <div className="w-full flex justify-center">
          <Image src={certificate} alt="certificate" />
        </div>
      </MainContainer>
    </div>
  </Wrapper>
);

export default CompanyInfo;
