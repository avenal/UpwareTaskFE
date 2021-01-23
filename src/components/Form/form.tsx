import React, { useState, useEffect, useRef } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { addDays } from 'date-fns';
import { useDispatch, useSelector } from "react-redux";
import { addNewElement, updateElement, fetchElementList } from "store/elements";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { setDate } from "date-fns/esm";

const validationSchema = yup.object().shape({
  date_from: yup.date().required("Pole wymagane"),
  date_to: yup.string().required("Pole wymagane").min(1, "Pole wymagane"),
  date_time: yup.string(),
  currency_name: yup.string(),
  currency_value: yup.number(),
  consent: yup.bool().oneOf([true, false], "Pole wymagane"),
  tag: yup.number(),
  //   tags: yup.array().of(yup.object().shape({
  //       id: yup.number()
  //   }))
  tags: yup.string(),
});

const Form = ({ object, isEdit }: any) => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
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
      date_from: object ? object.date_from : "",
      date_to: object ? object.date_to : "",
      date_time: object ? object.date_time : "",
      currency_name: object ? object.currency_name : "",
      currency_value: object ? object.currency_value : "",
      consent: object ? object.consent : "",
      tag: object && object.tag ? object.tag.id : "",
      tags:
        object && object.tags
          ? object.tags.map((i: any) => i.id).join(",")
          : "",
    },
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema,
    onSubmit(values: any, { resetForm }) {
      const data = {
        ...values,
        id: object.id,
        tags: values.tags.split(",").map((item: any) => {
          return { id: item };
        }),
      };
      if (isEdit) {
        dispatch(updateElement(data));
      } else {
        dispatch(addNewElement(data));
      }
    },
  });

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
      <DateRangePicker
        onChange={(item:any) => {setState([item.selection])
        setFieldValue('date_from', state[0].startDate)
        setFieldValue('date_to', state[0].endDate)
        console.log(values.date_from)
        console.log(values.date_to)

        }}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        ranges={state}
        direction="horizontal"
      />
        <input
          name={"date_from"}
          value={values.date_from}
          onChange={handleChange}
          placeholder="data od"
        />
        <input
          name={"date_to"}
          value={values.date_to}
          onChange={handleChange}
          placeholder="data do"
        />
        <input
          name={"date_time"}
          value={values.date_time}
          onChange={handleChange}
          placeholder="datetime"
        />
        <input
          name={"currency_name"}
          value={values.currency_name}
          onChange={handleChange}
          placeholder="currency name"
        />
        <input
          name={"currency_value"}
          value={values.currency_value}
          onChange={handleChange}
          placeholder="currency_value"
        />
        <input
          name={"consent"}
          value={values.consent}
          onChange={handleChange}
          placeholder="consent"
        />
        <input
          name={"tag"}
          value={values.tag}
          onChange={handleChange}
          placeholder="tag"
        />
        <input
          name={"tags"}
          value={values.tags}
          onChange={handleChange}
          placeholder="tags"
        />
        {/* {errors.name ? <p>{errors.name}</p> : null} */}
        <button
          onClick={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          Wyslij
        </button>
      </form>
    </>
  );
};

export { Form };
