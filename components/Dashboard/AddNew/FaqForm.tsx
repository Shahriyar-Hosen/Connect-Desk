"use client";

import { Button } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../FormsElement";

const validationSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  answer: Yup.string().required("Answer is required"),
  questionBn: Yup.string().required("প্রশ্ন দিতে হবে"),
  answerBn: Yup.string().required("উত্তর দিতে হবে"),
});

interface IFaqForm {
  question: string;
  answer: string;
  questionBn: string;
  answerBn: string;
}

export const FaqForm = () => {
  const initialValues: IFaqForm = {
    question: "",
    answer: "",
    questionBn: "",
    answerBn: "",
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
          <div className="space-y-2.5">
            <label className="text-base font-semibold">Question</label>
            <Input
              type="text"
              as="textarea"
              name="question"
              placeholder="Question"
            />
            <label className="text-base font-semibold">প্রশ্ন</label>
            <Input
              type="text"
              as="textarea"
              name="questionBn"
              placeholder="প্রশ্ন"
            />
          </div>

          <div className="space-y-2.5">
            <label className="text-base font-semibold">Answer</label>
            <Input
              type="text"
              as="textarea"
              name="answer"
              placeholder="Answer"
            />
            <label className="text-base font-semibold">উত্তর</label>
            <Input
              type="text"
              as="textarea"
              name="answerBn"
              placeholder="উত্তর"
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
