/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
  MainContainer,
} from "@Components/Common";
import { mackbook } from "@public/assets/images/";
import Image from "next/image";

const AboutHome = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader
          position="center"
          title={
            <span>
              About <ConnectDesk text="xl" />
            </span>
          }
          subTitle="Software"
        />

        <div className="flex lg:w-[80%] w-[100%] mx-auto my-12 flex-col lg:flex-row">
          <div className="flex justify-center">
            <Image
              src={mackbook}
              className="lg:w-[521px] lg:h-[282.39px]  w-[330px]"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-around">
            <CommonText>
              Using the ConnectDesk, you can manage your company's sales and
              marketing modules. ConnectDesk software automates tasks including
              client sales, manage inventory, and distribution activities.
            </CommonText>
            <br />
            <CommonText>
              ConnectDesk software not only assists you in managing your
              business but also keeps track of your inventory and personnel. It
              also features an extensive account management system.
            </CommonText>
            <div className="mt-6">
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
};

export default AboutHome;
