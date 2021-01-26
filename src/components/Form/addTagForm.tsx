import React, { useRef, FC } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewTag } from "store/tags";
import { Input, Form } from "./styles";
import { Submit } from "components/Buttons"

const validationSchema = yup.object().shape({
  title: yup.string().required("Pole wymagane"),
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
      title:"",
    },
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema,
    onSubmit(values: any, { resetForm }) {
      dispatch(addNewTag(values));
    },
  });
  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name={"title"}
          value={values.title}
          onChange={handleChange}
          placeholder="title"
        />

        {/* {errors.name ? <p>{errors.name}</p> : null} */}
        <Submit
          onClick={(e) => {
            submitForm();
            e.preventDefault();
          }}
        >
          Wyslij
        </Submit>
      </Form>
    </>
  );
};

export { AddTagForm };
