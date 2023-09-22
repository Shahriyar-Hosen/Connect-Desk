"use client";

import { Header, Table } from "@/components/Dashboard";
import { FC } from "react";

const VideoTutorial: FC = () => (
  <main>
    <Header title="Video Tutorial" link="/dashboard/video-tutorial/add-new" />
    <Table />
  </main>
);

export default VideoTutorial;
