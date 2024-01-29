"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  titleBn: Yup.string().required("টাইটেল দিতে হবে"),
  videoLink: Yup.string()
    .required("Video Link is required")
    .matches(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com|dailymotion\.com|v\.redd\.it)\/.+/,
      "Invalid video link."
    ),
});

interface IVideoTutorialForm {
  title: string;
  titleBn: string;
  videoLink: string;
}

export const VideoTutorialForm = () => {
  const initialValues: IVideoTutorialForm = {
    title: "",
    titleBn: "",
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
            <label className="text-base font-semibold">টাইটেল</label>
            <Input type="text" name="titleBn" placeholder="ভিডিও টাইটেল" />
          </div>
          <div>
            <label className="text-base font-semibold">Video Link</label>
            <Input type="text" name="videoLink" placeholder="Video Link" />
          </div>

          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed mt-5"
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
