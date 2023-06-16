"use client";
import {
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";

const ImportantFeatures = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader
          title="Important Features Of"
          subTitle={<ConnectDesk text="lg" />}
        />
      </Container>
    </MainContainer>
  );
};

export default ImportantFeatures;
