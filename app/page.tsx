import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Logo,
} from "@Components/Common";
// import HeroSection from "@Components/HeroSection";

const Home = () => {
  return (
    <div className="flex justify-center  w-full  flex-col gap-5">
      {/* <HeroSection /> */}
      <Logo />
      <ComponentHeader
        position="center"
        title="Check Out All The Important Features Of"
        subTitle={
          <span>
            <ConnectDesk font="sans" /> Software
          </span>
        }
      ></ComponentHeader>
      <CommonText>
        Look at the dashboard to gain an understanding of the
        daily/monthly/yearly business sales, Best Sales Products graph, and
        Total Income. With a single click, you can access any option.
      </CommonText>
    </div>
  );
};

export default Home;
