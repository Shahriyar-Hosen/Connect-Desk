import { StaticImageData } from "next/image";

export interface IBlogs {
  postDate: string;
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}
