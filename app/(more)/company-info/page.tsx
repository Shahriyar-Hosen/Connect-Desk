import { MainContainer } from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { certificate } from "@public/assets/images";
import Image from "next/image";

const CompanyInfo = () => {
  return (
    <main>
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
            <h3 className="mb-2">
              VAT Registration Number : BIN: 674766-2023{" "}
            </h3>
            <h3 className="mb-2">E-TIN : 67567575786 </h3>
          </div>
          <div>
            <Image src={certificate} alt="certificate" />
          </div>
        </MainContainer>
        {/* {termsAndConditionData.map((data) => (
          <PolicyContainer textPosition="left" data={data} key={data.title} />
        ))} */}
      </div>
    </main>
  );
};

export default CompanyInfo;
