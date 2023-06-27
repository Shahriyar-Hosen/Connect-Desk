"use client";

import { Container, MainContainer } from "@Components/Common";
import React, { useState } from "react";
// import { ScrollTrigger as ReactNode } from "react-scroll-trigger";
import ScrollTrigger from "react-scroll-trigger";
import { CounterCard } from "./CounterCard";

export const Counter: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  // const Trigger = ScrollTrigger as unknown as ReactNode;
  return (
    <MainContainer>
      <>
        <ScrollTrigger
          onEnter={() => setIsHover(true)}
          onExit={() => setIsHover(false)}
          component
        >
          <Container>
            <div className="bg-base-100 bg-opacity-50 py-12 px-8 md:py-20 md:px-16 w-fit lg:w-full max-w-6xl mx-auto rounded-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
              {isHover && (
                <>
                  <CounterCard
                    count={100}
                    label="M"
                    title="Client Satisfaction"
                  />
                  <CounterCard
                    count={24}
                    label=" h"
                    title="Expert Support Team"
                  />
                  <CounterCard count={98} label=" k+" title="Sales Count" />
                  <CounterCard
                    count={208}
                    label=" +"
                    title="Client Worldwide"
                  />
                </>
              )}
            </div>
          </Container>
        </ScrollTrigger>
      </>
    </MainContainer>
  );
};
