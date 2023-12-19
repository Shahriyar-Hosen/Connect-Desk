"use client";

import { Header, Table } from "@/components/Dashboard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC } from "react";

const VideoTutorial: FC = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/dashboard");
    },
  });
  return (
    <main>
      <Header title="Video Tutorial" link="/dashboard/video-tutorial/add-new" />
      <Table />
    </main>
  );
};

export default VideoTutorial;
