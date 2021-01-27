import React, { useRef, FC } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewTag } from "store/tags";
import { Input, Form } from "./styles";
import { Submit } from "components/Buttons";
import {
  ErrorMessage,
  ErrorWrapper,
  InputWrapper,
  Label,
  SubmitWrapper,
} from "./styles";

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required("Pole wymagane")
    .min(2, "This field must be 2-20 characters")
    .max(20, "This field must be 2-20 characters"),
});

const AddTagForm: FC<any> = () => {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
    submitForm,
  } = useFormik({
    initialValues: {
      title: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit(values: any, { resetForm }) {
      dispatch(addNewTag(values));
      resetForm();
    },
  });
  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Title</Label>
          <Input
            name={"title"}
            value={values.title}
            onChange={handleChange}
            placeholder="title"
          />
          <ErrorWrapper>
            {errors.title ? <ErrorMessage>{errors.title}</ErrorMessage> : null}
          </ErrorWrapper>
        </InputWrapper>
        <SubmitWrapper>
          <Submit
            onClick={(e) => {
              submitForm();
              e.preventDefault();
            }}
          >
            Submit
          </Submit>
        </SubmitWrapper>
      </Form>
    </>
  );
};

export { AddTagForm };
