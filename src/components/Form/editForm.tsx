import React, { useState, useEffect, useRef, FC } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { addDays, format, toDate } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { addNewElement, updateElement, fetchElementList } from "store/elements";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { Input, Form } from "./styles";
import { Select } from "components/Select";
import { AppState } from "store/rootReducer";
import DateTimePicker from "react-datetime-picker";
import { Checkbox } from "components/Chceckbox";
import { Submit } from "components/Buttons"

const validationSchema = yup.object().shape({
  date_from: yup.date().required("Pole wymagane"),
  date_to: yup.string().required("Pole wymagane").min(1, "Pole wymagane"),
  date_time: yup.string(),
  currency_name: yup.string(),
  currency_value: yup.number(),
  consent: yup.bool().oneOf([true, false], "Pole wymagane"),
  tag: yup.number(),
  tags: yup.array().of(yup.number()),
});

const EditForm: FC<any> = ({ object, handleClose }: any) => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(object.date_from),
      endDate: new Date(object.date_to),
      key: "selection",
    },
  ]);
  const [datetime, setDatetime] = useState(new Date(object.date_time));
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const { currencies } = useSelector((state: AppState) => state.currencyList);
  const { tags } = useSelector((state: AppState) => state.tagList);
  const handleMultiSelect = (val: number) => {
    if (values.tags.includes(val)) {
      setFieldValue(
        "tags",
        values.tags.filter((item: number) => item !== val)
      );
    } else {
      setFieldValue("tags", [...values.tags, val]);
    }
  };

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
      date_from: new Date(object.date_from),
      date_to: new Date(object.date_to),
      date_time: new Date(object.date_time),
      currency_name: object.currency_name,
      currency_value: object.currency_value,
      consent: object.consent,
      tag: object.tag ? object.tag.id : "",
      tags: object && object.tags ? object.tags.map((i: any) => i.id) : [],
    },
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema,
    onSubmit(values: any, { resetForm }) {
      const data = {
        ...values,
        id: object.id,
        date_from: format(values.date_from, "yyyy-MM-dd"),
        date_to: format(values.date_to, "yyyy-MM-dd"),
        date_time: format(values.date_time, "yyyy-MM-dd HH:mm:ss"),
        consent: values.consent ? 1 : 0,
        tags: values.tags.map((item: any) => {
          return { id: item };
        }),
      };
      dispatch(updateElement(data));
      handleClose();
    },
  });
  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <DateRange
          onChange={(item: any) => {
            setState([item.selection]);
            setFieldValue("date_from", item.selection.startDate);
            setFieldValue("date_to", item.selection.endDate);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          editableDateInputs={true}
        />
        <DateTimePicker
          onChange={(value: Date) => {
            setDatetime(value);
            setFieldValue("date_time", value);
          }}
          value={datetime}
        />

        <Select
          options={currencies}
          valueFrom={"tag"}
          show={"name"}
          value={values.currency_name}
          handleClick={(val: string) => setFieldValue("currency_name", val)}
          multiple={false}
        />
        <Input
          name={"currency_value"}
          value={values.currency_value}
          onChange={handleChange}
          placeholder="Value"
          type="number"
          min="0"
          max="1000000000"
          step="0.1"
        />

        <Select
          options={tags}
          valueFrom={"id"}
          show={"title"}
          value={values.tag}
          handleClick={(val: string) => setFieldValue("tag", val)}
          multiple={false}
        />
        <Select
          options={tags}
          valueFrom={"id"}
          show={"title"}
          value={values.tags}
          handleClick={(val: number) => handleMultiSelect(val)}
          multiple={true}
        />
        <Checkbox
          value={values.consent}
          handleClick={(value: boolean) => setFieldValue("consent", value)}
        >
          I agree
        </Checkbox>
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

export { EditForm };
