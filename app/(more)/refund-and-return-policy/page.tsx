import { MainContainer } from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { PolicyContainer } from "@Components/Policy";
import { refundAndReturnPolicyData } from "@public/Data";

const PrivacyPolicy = () => {
  return (
    <main>
      <PageHeader
        pageName="Refund And Return Policy"
        mainTitle="Refund And Return"
        subTitle={<span className="text-primary">Policy</span>}
      />
      <MainContainer isRemoveMargin>
        <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto">
          {refundAndReturnPolicyData.map((data) => (
            <PolicyContainer data={data} key={data.title} />
          ))}
        </div>
      </MainContainer>
    </main>
  );
};

export default PrivacyPolicy;
