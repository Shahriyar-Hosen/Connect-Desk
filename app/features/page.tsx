import {
  AllFeatures,
  FeaturesHeader,
  FreeTrial,
  PageHeader,
} from "@/components";

const Features = () => (
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

export default Features;
