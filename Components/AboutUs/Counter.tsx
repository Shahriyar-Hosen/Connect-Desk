"use client";

import { Container, MainContainer } from "@Components/Common";

export const Counter = () => (
  <MainContainer>
    <Container>
      <div className="bg-base-100 bg-opacity-50 py-20 px-16 w-fit lg:w-full max-w-6xl mx-auto rounded-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        <div className="flex gap-9 justify-center items-center md:items-start flex-col">
          <h1 className="text-5xl font-extrabold">
            100<span className="text-primary">M</span>
          </h1>
          <p className="text-xl font-bold">Client Satisfaction</p>
        </div>
        <div className="flex gap-9 justify-center items-center md:items-start flex-col">
          <h1 className="text-5xl font-extrabold">
            24 <span className="text-primary">h</span>
          </h1>
          <p className="text-xl font-bold">Expert Support Team</p>
        </div>

        <div className="flex gap-9 justify-center items-center md:items-start flex-col">
          <h1 className="text-5xl font-extrabold">
            98 <span className="text-primary">k+</span>
          </h1>
          <p className="text-xl font-bold">Sales Count</p>
        </div>
        <div className="flex gap-9 justify-center items-center md:items-start flex-col">
          <h1 className="text-5xl font-extrabold">
            208 <span className="text-primary">+</span>
          </h1>
          <p className="text-xl font-bold">Client Worldwide</p>
        </div>
      </div>
    </Container>
  </MainContainer>
);
