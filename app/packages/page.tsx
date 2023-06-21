"use client";

import { AskedQuestions, PackagesCards } from "@Components/Packages";

const Packages = () => (
  <main>
    <div className="mt-[60px] pb-[50px]">
      <PackagesCards />
      <AskedQuestions />
    </div>
  </main>
);

export default Packages;
