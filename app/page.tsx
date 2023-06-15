import ConnectDesk from "@Components/Common/ConnectDesk";
import Header from "../Components/Shared/Header";
import ComponentHeader from "@Components/Common/ComponentHeader";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-5">
      <h1 className="text-accent text-xl font-bold">Connect Desk</h1>
      <button className="btn">Started</button>
      <ComponentHeader position="center">
        <h3>Check Out All The Important Features Of <br />
          <ConnectDesk /> Software
        </h3>
      </ComponentHeader>
    </div>
  );
};

export default Home;