import { CommonText, MainContainer } from "@Components/Common";
import { IBlogs } from "@Interface/common/Iblogs";
import Image from "next/image";
import { BlogButton } from "./BlogButton";

const Blog = ({ blog }: { blog: IBlogs }) => {
  const { description, id, image, postDate, title } = blog;
  return (
    <MainContainer isRemoveMargin>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[65%]">
          <div className="flex gap-2">
            <BlogButton text="By ConnectDesk" isHaveBackground />
            <BlogButton text={postDate} />
          </div>
          <div className="my-4">
            <h1 className="text-[18px] md:text-[26px] font-semibold">
              {title}
            </h1>
            <CommonText>{description}</CommonText>
          </div>
          <button className="text-lg font-medium text-primary border-none">
            Red More
          </button>
        </div>
        <div className="w-full md:w-[35%] flex md:justify-end mt-5 md:mt-0">
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
};

export default Blog;
