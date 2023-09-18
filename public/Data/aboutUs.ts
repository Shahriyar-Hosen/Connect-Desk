import { IMissionVisionValue } from "@/Interface";
import { mission, value, vision } from "../assets/images";

export const missionVisionValueData: IMissionVisionValue[] = [
  {
    id: 1,
    title: "Our Mission",
    des: "Our Mission is to achieve the reputation of quality, high standards and a reliable solution provider in the ICT industry.",
    img: mission,
  },
  {
    id: 2,
    title: "Our Vision",
    des: "Our vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost.",
    img: vision,
  },
  {
    id: 3,
    title: "Value",
    des: "We give 100% value to our customer satisfaction by delivering quality products and services at an affordable cost.",
    img: value,
  },
];
