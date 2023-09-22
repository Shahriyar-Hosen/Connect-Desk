"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../Form";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  videoLink: Yup.string()
    .required("Video Link is required")
    .matches(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com|dailymotion\.com|v\.redd\.it)\/.+/,
      "Invalid video link. Please provide a valid link from supported platforms."
    ),
});

interface IVideoTutorialForm {
  title: string;
  videoLink: string;
}

export const VideoTutorialForm = () => {
  const initialValues: IVideoTutorialForm = {
    title: "",
    videoLink: "",
  };

  const handleSubmit = (
    values: IVideoTutorialForm,
    { resetForm }: FormikHelpers<IVideoTutorialForm>
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="w-full flex flex-col justify-center items-start gap-2.5">
          <div>
            <label className="text-base font-semibold">Title</label>
            <Input type="text" name="title" placeholder="Video Title" />
          </div>
          <div>
            <label className="text-base font-semibold">Video Link</label>
            <Input type="text" name="videoLink" placeholder="Video Link" />
          </div>

          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed mt-8"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Add Category
          </Button>
        </Form>
      )}
    </Formik>
  );
};
