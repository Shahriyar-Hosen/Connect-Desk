"use client";

import {
  CommonText,
  ComponentHeader,
  ConnectDesk,
  Logo,
} from "@Components/Common";

const Home = () => {
  console.log({});
  return (
    <div className="flex justify-center items-center w-full h-[85vh] flex-col gap-5">
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
