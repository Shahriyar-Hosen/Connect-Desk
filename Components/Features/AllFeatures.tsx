import { ComponentHeader, MainContainer } from "@Components/Common";
import { features } from "@public/Data/featuresPage";
import { Feature } from "./Feature";

export const AllFeatures = () => {
  return (
    <MainContainer isRemoveMargin>
      {features.map((feature) => (
        <>
          <Feature key={feature.id} feature={feature} />
        </>
      ))}
    </MainContainer>
  );
};
