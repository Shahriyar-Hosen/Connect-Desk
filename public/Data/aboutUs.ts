import { IMissionVisionValue } from "@/Interface";
import { mission, value, vision } from "../assets/images";

export const missionVisionValueData: IMissionVisionValue[] = [
  {
    id: 1,
    title: "missionVision.ourMission",
    des: "missionVision.ourMissionDes",
    img: mission,
  },
  {
    id: 2,
    title: "missionVision.ourVision",
    des: "missionVision.ourVisionDes",
    img: vision,
  },
  {
    id: 3,
    title: "missionVision.value",
    des: "missionVision.valueDes",
    img: value,
  },
];
