import { CommonText, ComponentHeader, ConnectDesk } from "@Components/Common";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-5">
      <h1 className="text-accent text-xl font-bold">Connect Desk</h1>
      <button className="btn">Started</button>
      <ComponentHeader
        position="center"
        title="Check Out All The Important Features Of"
        subTitle={
          <span>
            <ConnectDesk /> Software
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
