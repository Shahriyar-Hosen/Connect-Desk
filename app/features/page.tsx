import {
  AllFeatures,
  FeaturesHeader,
  FreeTrial,
  PageHeader,
} from "@/components";
import { Wrapper } from "@/components/Shared";

const Features = () => (
  <Wrapper>
    <PageHeader
      pageName="Feature"
      mainTitle="Take A Look At Our Awesome"
      subTitle={<span className="text-primary">Features</span>}
    />
    <FeaturesHeader />
    <AllFeatures />
    <FreeTrial />
  </Wrapper>
);

export default Features;
