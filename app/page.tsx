import { Button } from "@components/common";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-5">
      <h1 className="text-accent text-xl font-bold">Connect Desk</h1>
      <Button variant="primary">Primary Btn</Button>
    </div>
  );
};

export default Home;
