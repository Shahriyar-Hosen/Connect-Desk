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
          subTitle={<ConnectDesk />}
        />
      </Container>
    </MainContainer>
  );
};

export default ImportantFeatures;
