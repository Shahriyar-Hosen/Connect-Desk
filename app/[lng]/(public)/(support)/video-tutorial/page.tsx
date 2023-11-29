"use client";

import {
  ComponentHeader,
  Container,
  MainContainer,
  PageHeader,
  VideoTutorialCard,
} from "@/components";

import { videoTutorialData } from "@/public/Data/videoTutorial";

const VideoTutorial = () => (
  <main>
    <PageHeader
      pageName="Video Tutorial"
      mainTitle={
        <>
          Video <span className="text-primary">Tutorial</span>
        </>
      }
    />

    <MainContainer>
      <Container>
        <ComponentHeader title="সফটওয়ারের ভিডিও টিউটোরিয়াল দেখে নিন" />

        <section className="mt-[60px] grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-7 md:gap-[50px] max-w-6xl mx-auto w-full">
          {videoTutorialData.map(({ title, videoUrl }, i) => (
            <VideoTutorialCard key={i} title={title} videoUrl={videoUrl} />
          ))}
        </section>
      </Container>
    </MainContainer>
  </main>
);

export default VideoTutorial;
