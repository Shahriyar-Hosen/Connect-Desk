"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  features: Yup.string().required("Features is required"),
  image: Yup.string()
    .required("Image is required")
    .url("Invalid image link. Please provide a valid URL."),
  subcategoryId: Yup.string()
    .required("Subcategory Id is required")
    .matches(/^[0-9]/, "Subcategory Id must be a numeric value"),
  titleBn: Yup.string().required("টাইটেল দিতে হবেd"),
  featuresBn: Yup.string().required("ফিচার দিতে হবে"),
});

interface IProductsForm {
  title: string;
  features: string;
  subcategoryId: string;
  titleBn: string;
  featuresBn: string;
  image: string;
}

export const ProductsForm = () => {
  const initialValues: IProductsForm = {
    title: "",
    features: "",
    subcategoryId: "",
    titleBn: "",
    featuresBn: "",
    image: "",
  };

  const handleSubmit = (
    values: IProductsForm,
    { resetForm }: FormikHelpers<IProductsForm>
  ) => {
    const { titleBn, featuresBn, image, subcategoryId, ...others } =
      values || {};

    const en = { ...others, image, subcategoryId };
    const bn = { titleBn, featuresBn, image, subcategoryId };

    console.log("🚀 ~ ProductsForm ~ bn:", { en, bn });

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
            <label className="text-base font-semibold">Sub Title</label>
            <Input type="text" name="title" placeholder="Title" />
            <label className="text-base font-semibold">সাবটাইটেল</label>
            <Input type="text" name="titleBn" placeholder="সাবটাইটেল" />
          </div>
          <div>
            <label className="text-base font-semibold">Features</label>
            <Input type="text" name="features" placeholder="Features" />
            <label className="text-base font-semibold">বৈশিষ্ট্য</label>
            <Input type="text" name="featuresBn" placeholder="বৈশিষ্ট্য" />
          </div>
          <div>
            <label className="text-base font-semibold">Subcategory Id</label>
            <Input
              type="text"
              name="subcategoryId"
              placeholder="Subcategory Id"
            />
          </div>
          <div>
            <label className="text-base font-semibold">Image</label>
            <Input type="text" name="image" placeholder="image url" />
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
