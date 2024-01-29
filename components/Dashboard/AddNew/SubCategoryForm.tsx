"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  subCategory: Yup.string().required("Sub Category is required"),
  subCategoryBn: Yup.string().required("সাব ক্যাটাগরির দিতে হবে"),
  categoryId: Yup.string()
    .required("Category Id is required")
    .matches(/^[0-9]/, "Category Id must be a numeric value"),
});

interface ISubCategoryForm {
  subCategory: string;
  categoryId: string;
  subCategoryBn: string;
}

export const SubCategoryForm = () => {
  const initialValues: ISubCategoryForm = {
    subCategory: "",
    categoryId: "",
    subCategoryBn: "",
  };

  const handleSubmit = (
    values: ISubCategoryForm,
    { resetForm }: FormikHelpers<ISubCategoryForm>
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
            <label className="text-base font-semibold">Sub Category Name</label>
            <Input type="text" name="subCategory" placeholder="Category" />
            <label className="text-base font-semibold">
              সাব ক্যাটাগরির নাম
            </label>
            <Input
              type="text"
              name="subCategoryBn"
              placeholder="সাব ক্যাটাগরির নাম"
            />
          </div>
          <div>
            <label className="text-base font-semibold">Category Id</label>
            <Input type="text" name="categoryId" placeholder="Category Id" />
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
