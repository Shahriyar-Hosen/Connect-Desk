"use client";

import { IBlogs } from "@/Interface";
import Image from "next/image";
import { FC } from "react";
import { CommonText, MainContainer } from "..";
import { BlogButton } from "./BlogButton";

export const Blog: FC<IBlogs> = ({
  description,
  id,
  image,
  postDate,
  title,
}) => (
  <MainContainer isRemoveMargin>
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-5 md:gap-10">
      <div className="w-full md:w-[65%] max-w-[610px]">
        <div className="flex gap-2">
          <BlogButton text="By ConnectDesk" isHaveBackground />
          <BlogButton text={postDate} />
        </div>
        <div className="my-4">
          <h1 className="text-[18px] md:text-[26px] font-semibold">{title}</h1>
          <CommonText>{description}</CommonText>
        </div>
        <button className="text-lg font-medium text-primary border-none">
          Red More
        </button>
      </div>

      <div className="w-full md:w-[35%] flex justify-center items-center md:justify-end mt-5 md:mt-0">
        <Image
          className="w-full max-w-[430px]"
          src={image}
          alt="connect-desk-blog"
        />
      </div>
    </div>
    <div className="mt-8 w-full h-[1px] bg-neutral"></div>
  </MainContainer>
);
