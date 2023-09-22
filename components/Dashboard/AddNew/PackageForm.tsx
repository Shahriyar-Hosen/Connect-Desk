"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../Form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Title is required"),
  features: Yup.string().required("Features is required"),
  cost: Yup.string()
    .required("Cost is required")
    .matches(/^[0-9]/, "Cost must be a numeric value"),
});

interface IPackageForm {
  name: string;
  features: string;
  cost: string;
}

export const PackagesForm = () => {
  const initialValues: IPackageForm = {
    name: "",
    features: "",
    cost: "",
  };

  const handleSubmit = (
    values: IPackageForm,
    { resetForm }: FormikHelpers<IPackageForm>
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
            <label className="text-base font-semibold">Package Name</label>
            <Input type="text" name="name" placeholder="Package Name" />
          </div>
          <div>
            <label className="text-base font-semibold">Features</label>
            <Input type="text" name="features" placeholder="Features" />
          </div>
          <div>
            <label className="text-base font-semibold">Cost</label>
            <Input type="text" name="cost" placeholder="Cost" />
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
