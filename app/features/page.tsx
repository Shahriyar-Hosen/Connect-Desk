import { AllFeatures, FeaturesHeader } from "@Components/Features";
import { FreeTrial } from "@Components/Home";
import PageHeader from "@Components/PageHeader";

const Features = () => {
  return (
    <main>
      <PageHeader
        pageName="Feature"
        mainTitle="Take A Look At Our Awesome"
        subTitle={<span className="text-primary">Features</span>}
      />
      <FeaturesHeader />
      <AllFeatures />
      <FreeTrial />
    </main>
  );
};

export default Features;
