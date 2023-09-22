"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Input } from ".";

interface IFaqForm {
  question: string;
  answer: string;
}

const initialValues = {
  question: "",
  answer: "",
};

export interface IMyForm {
  validationSchema: Yup.ObjectSchema<any>;
  initialValues: IFaqForm;
  handleSubmit: Function;
}

export const MyForm: FC<IMyForm> = ({ validationSchema }) => {
  const handleSubmit = (
    values: IFaqForm,
    { resetForm }: FormikHelpers<IFaqForm>
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
            <label className="text-base font-semibold">Question</label>
            <Input
              type="text"
              as="textarea"
              name="question"
              placeholder="Question"
            />
          </div>

          <div>
            <label className="text-base font-semibold">Answer</label>
            <Input
              type="text"
              as="textarea"
              name="answer"
              placeholder="Answer"
            />
          </div>

          <Button
            variant="primary"
            className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed mt-5"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Add Faq
          </Button>
        </Form>
      )}
    </Formik>
  );
};
