"use client";

import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n/client";
import {
  ComponentHeader,
  Container,
  MainContainer,
  PageHeader,
  VideoTutorialCard,
} from "@/components";

import { videoTutorialData } from "@/public/Data/videoTutorial";
import { FC } from "react";
import { Trans } from "react-i18next";

const VideoTutorial: FC<IIntlParams> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, ["common", "video-tutorial"]);
  return (
    <main>
      <PageHeader
        pageName={t("pageName", { ns: "video-tutorial" })}
        mainTitle={
          <>
            <Trans
              i18nKey="mainTitle"
              components={{ spanTag: <span className="text-primary" /> }}
              t={t}
              ns={"video-tutorial"}
            />
          </>
        }
      />

      <MainContainer>
        <Container>
          <ComponentHeader title={t("introPara", { ns: "video-tutorial" })} />

          <section className="mt-[60px] grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-7 md:gap-[50px] max-w-6xl mx-auto w-full">
            {videoTutorialData.map(({ title, videoUrl }, i) => (
              <VideoTutorialCard
                key={i}
                title={t(title, { ns: "video-tutorial" })}
                videoUrl={videoUrl}
              />
            ))}
          </section>
        </Container>
      </MainContainer>
    </main>
  );
};

export default VideoTutorial;
