"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  answer: Yup.string().required("Answer is required"),
});

interface IFaqForm {
  question: string;
  answer: string;
}

export const FaqForm = () => {
  const initialValues: IFaqForm = {
    question: "",
    answer: "",
  };

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
