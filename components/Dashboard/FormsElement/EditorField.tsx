"use client";

import { Field, FieldProps } from "formik";
import dynamic from "next/dynamic";
import { ComponentType, useMemo } from "react";

import "react-quill/dist/quill.snow.css";
import { FormikError } from ".";
export const EdiotrField: ComponentType<FieldProps> = ({
  field,
  form,
  meta,
}) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <div>
      <ReactQuill
        style={{ width: "100%" }}
        theme="snow"
        value={field.value}
        onChange={field.onChange(field.name)}
      />
      <FormikError
        name={field.name}
        component="div"
        className="-bottom-[15px]"
      />
    </div>
  );
};
