import { AllFeatures, FeaturesHeader } from "@Components/Features";
import PageHeader from "@Components/PageHeader";

const Features = () => {
  return (
    <div>
      <PageHeader
        pageName="Feature"
        mainTitle="Take A Look At Our Awesome"
        subTitle={<span className="text-primary">Features</span>}
      />
      <FeaturesHeader />
      <AllFeatures />
    </div>
  );
};

export default Features;
