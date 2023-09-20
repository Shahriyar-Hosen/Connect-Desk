import { Blog, PageHeader } from "@/components";
import { blogsData } from "@/public/Data/blogPage";

const BlogsPage = () => (
  <main>
    <PageHeader
      pageName="Blog"
      mainTitle="Read Our Awesome"
      subTitle={<span className="text-primary">Blogs</span>}
    />
    <div className="w-[80%] md:w-[90%] lg:w-[70%] max-w-6xl mx-auto">
      {blogsData.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  </main>
);

export default BlogsPage;
