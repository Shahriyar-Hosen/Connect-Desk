import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  MainContainer,
} from "@Components/Common";
import PageHeader from "@Components/PageHeader";
import { PolicyContainer } from "@Components/Policy";
import { privatePolicyData } from "@public/Data";

const PrivacyPolicy = () => {
  return (
    <main>
      <PageHeader
        pageName="Privacy Policy"
        mainTitle={
          <span>
            Privacy <span className="text-primary">Policy</span>
          </span>
        }
      />
      <div className="w-[80%] md:w-[90%] lg:w-[70%] mx-auto">
        <MainContainer isRemoveMargin>
          <ComponentHeader
            title={
              <span>
                <ConnectDesk text="lg" /> Privacy Policy
              </span>
            }
          />
          <p className="mt-4">
            <CommonText>
              Design comps, layouts, wireframes—will your clients accept that
              you go about things the facile way? Authorities in our business
              will tell in no uncertain terms that Lorem Ipsum is that huge,
              huge no no to forswear forever.{" "}
            </CommonText>
          </p>
        </MainContainer>
        {privatePolicyData.map((data) => (
          <PolicyContainer data={data} key={data.title} />
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
