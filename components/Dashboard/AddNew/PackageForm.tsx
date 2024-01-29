"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Title is required"),
  features: Yup.string().required("Features is required"),
  cost: Yup.string()
    .required("Cost is required")
    .matches(/^[0-9]/, "Cost must be a numeric value"),
  nameBn: Yup.string().required("প্যাকেজের নাম দিতেই হবে"),
  featuresBn: Yup.string().required("বৈশিষ্ট্য দিতেই হবে"),
  costBn: Yup.string().required("খরচ দিতেই হবে"),
});

interface IPackageForm {
  name: string;
  features: string;
  cost: string;
  nameBn: string;
  featuresBn: string;
  costBn: string;
}

interface IPackageData {
  name: string;
  features: string;
  cost: string;
}

const initialValues: IPackageForm = {
  name: "",
  features: "",
  cost: "",
  nameBn: "",
  featuresBn: "",
  costBn: "",
};

export const PackagesForm: FC = () => {
  const handleSubmit = (
    values: IPackageForm,
    { resetForm }: FormikHelpers<IPackageForm>
  ) => {
    const enData = {
      name: values.name,
      features: values.features,
      cost: values.cost,
    };
    const bnData = {
      name: values.nameBn,
      features: values.featuresBn,
      cost: values.costBn,
    };

    console.log({ enData, bnData });

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
            <label className="text-base font-semibold">প্যাকেজের নাম</label>
            <Input type="text" name="nameBn" placeholder="প্যাকেজের নাম" />
          </div>
          <div>
            <label className="text-base font-semibold">Features</label>
            <Input type="text" name="features" placeholder="Features" />
            <label className="text-base font-semibold">বৈশিষ্ট্য</label>
            <Input type="text" name="featuresBn" placeholder="বৈশিষ্ট্য" />
          </div>
          <div>
            <label className="text-base font-semibold">Cost</label>
            <Input type="text" name="cost" placeholder="Cost" />
            <label className="text-base font-semibold">খরচ</label>
            <Input type="text" name="costBn" placeholder="খরচ" />
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
