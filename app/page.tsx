import { logoSvg } from "@/public/assets";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-5 text-center mt-5">
      <Image src={logoSvg} alt="" />
      <h1 className="font-Exo text-primary text-2xl font-bold">
        This is <span className="text-secondary">Home</span> Page
      </h1>
    </main>
  );
};

export default Home;
