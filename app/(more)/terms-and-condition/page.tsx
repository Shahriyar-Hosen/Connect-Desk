import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  MainContainer,
} from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { PolicyContainer } from "@Components/Policy";
import { privatePolicyData, termsAndConditionData } from "@public/Data";

const PrivacyPolicy = () => {
  return (
    <main>
      <PageHeader
        pageName="Terms And Conditions"
        mainTitle={
          <span>
            Terms And <span className="text-primary">Conditions</span>
          </span>
        }
      />
      <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto ">
        <MainContainer isRemoveMargin>
          <ComponentHeader title="সফটওয়্যার ব্যবহারের শর্তাবলী" />
        </MainContainer>
        {termsAndConditionData.map((data) => (
          <PolicyContainer textPosition="left" data={data} key={data.title} />
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
