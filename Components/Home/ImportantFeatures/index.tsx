"use client";
import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";
import { featuresData } from "@public/Data";
import FeatureCard from "./FeatureCard";

const ImportantFeatures = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader
          title="Important Features Of"
          subTitle={<ConnectDesk text="lg" />}
        />

        <section className="mt-[60px] max-w-[1107px] lg:w-[95%] xl:w-full mx-auto grid grid-cols-1 sm:grid-cols-1 gap-y-[45px] gap-x-[44px] md:grid-cols-2 lg:grid-cols-3 gap-11 justify-items-center content-center">
          {featuresData.map(({ des, icon, title }, i) => (
            <FeatureCard des={des} icon={icon} title={title} key={i} />
          ))}
        </section>
      </Container>
    </MainContainer>
  );
};

export default ImportantFeatures;
