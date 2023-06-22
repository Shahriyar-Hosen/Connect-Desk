import Blog from "@Components/Blog";
import PageHeader from "@Components/PageHeader";
import { blogsData } from "@public/Data/blogPage";

const BlogPage = () => {
  return (
    <main>
      <PageHeader
        pageName="Blog"
        mainTitle="Read Our Awesome"
        subTitle={<span className="text-primary">Blogs</span>}
      />
      <div className="w-[80%] md:w-[90%] lg:w-[80%] mx-auto">
        {blogsData.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
