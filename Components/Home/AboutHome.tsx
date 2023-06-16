import {
  Button,
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Container,
} from "@Components/Common";
import { mackbook } from "@public/assets/images/";
import Image from "next/image";

const AboutHome = () => {
  return (
    <Container>
      <ComponentHeader
        position="center"
        title={
          <span>
            About <ConnectDesk />
          </span>
        }
        subTitle="Software"
      />

      <div className="flex lg:w-[80%] w-[100%] mx-auto my-12 flex-col lg:flex-row">
        <Image
          src={mackbook}
          className="lg:w-[521px] lg:h-[282.39px]  w-[330px]"
          alt=""
        />
        <div className="lg:w-1/2 flex flex-col justify-around">
          <CommonText>
            Using the ConnectDesk, you can manage your company's sales and
            marketing modules. ConnectDesk software automates tasks including
            client sales, manage inventory, and distribution activities.
          </CommonText>
          <CommonText>
            ConnectDesk software not only assists you in managing your business
            but also keeps track of your inventory and personnel. It also
            features an extensive account management system.
          </CommonText>
          <div>
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutHome;
