import { IIntlParams } from "@/Interface";
import { useTranslation } from "@/app/i18n";
import { Blog, PageHeader } from "@/components";
import { blogsData } from "@/public/Data/blogPage";
import { FC } from "react";

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
          <Blog key={blog.id} {...blog} lng={lng} />
        ))}
      </div>
    </main>
  );
};

export default BlogsPage;
