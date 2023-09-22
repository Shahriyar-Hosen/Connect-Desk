"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
});

interface ICategoryForm {
  category: string;
}

export const CategoryForm = () => {
  const initialValues: ICategoryForm = {
    category: "",
  };

  const handleSubmit = (
    values: ICategoryForm,
    { resetForm }: FormikHelpers<ICategoryForm>
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
            <label className="text-base font-semibold">Category Name</label>
            <Input type="text" name="category" placeholder="Category" />
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
