import { Blog, PageHeader } from "@/components";
import { blogsData } from "@/public/Data/blogPage";
import { useTranslation } from "@/app/i18n";
import { FC } from "react";
import { IIntlParams } from "@/Interface";

const BlogsPage: FC<IIntlParams> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "blogs");
  return (
    <main>
      <PageHeader
        pageName={t("blog")}
        mainTitle={t("mainTitle")}
        subTitle={<span className="text-primary">{t("subTitle")}</span>}
      />
      <div className="w-[80%] md:w-[90%] lg:w-[70%] max-w-6xl mx-auto">
        {blogsData.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
};

export default BlogsPage;
