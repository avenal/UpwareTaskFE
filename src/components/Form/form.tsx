import React, { useState, useEffect, useRef, FC } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { addDays, format, toDate } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { addNewElement } from "store/elements";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { Input, Form as StyledForm } from "./styles";
import { Select } from "components/Select";
import { AppState } from "store/rootReducer";
import DateTimePicker from "react-datetime-picker";
import { Checkbox } from "components/Chceckbox";
import { Submit } from "components/Buttons";
import {
  ErrorMessage,
  ErrorWrapper,
  InputWrapper,
  Label,
  SubmitWrapper,
} from "./styles";

const validationSchema = yup.object().shape({
  date_from: yup.date().required("Field required"),
  date_to: yup.date().required("Field required"),
  date_time: yup.string().required("Field required"),
  currency_name: yup
    .string()
    .required("Field required")
    .min(1, "Field required"),
  currency_value: yup
    .number()
    .min(0, "Minimum value must be equal or greater than 0")
    .max(10000000000),
  consent: yup.bool().oneOf([true, false], "Field required"),
  tag: yup.number().required("Field required"),
  tags: yup.array().of(yup.number()),
});

const Form: FC<any> = ({ handleClose }: any) => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
      color: "#0A2472",
    },
  ]);
  const [datetime, setDatetime] = useState(new Date());
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
      date_from: state[0].startDate,
      date_to: state[0].endDate,
      date_time: datetime,
      currency_name: "",
      currency_value: "",
      consent: false,
      tag: "",
      tags: [],
    },
    validateOnChange: false,
    validationSchema,
    onSubmit(values: any, { resetForm }) {
      const data = {
        ...values,
        date_from: format(values.date_from, "yyyy-MM-dd"),
        date_to: format(values.date_to, "yyyy-MM-dd"),
        date_time: format(values.date_time, "yyyy-MM-dd HH:mm:ss"),
        consent: values.consent ? 1 : 0,
        tags: values.tags.map((item: any) => {
          return { id: item };
        }),
      };

      dispatch(addNewElement(data));
      handleClose();
    },
  });
  return (
    <>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Date range</Label>
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
          <ErrorWrapper>
            {errors.date_from ? (
              <ErrorMessage>{errors.date_from}</ErrorMessage>
            ) : null}
            {errors.date_to ? (
              <ErrorMessage>{errors.date_to}</ErrorMessage>
            ) : null}
          </ErrorWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Datetime</Label>
          <DateTimePicker
            className={"datepicker"}
            onChange={(value: Date) => {
              setDatetime(value);
              setFieldValue("date_time", value);
            }}
            value={datetime}
          />
          <ErrorWrapper>
            {errors.date_time ? (
              <ErrorMessage>{errors.date_time}</ErrorMessage>
            ) : null}
          </ErrorWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Currency</Label>
          <Select
            options={currencies}
            valueFrom={"tag"}
            show={"display"}
            value={values.currency_name}
            handleClick={(val: string) => setFieldValue("currency_name", val)}
            multiple={false}
          />
          <ErrorWrapper>
            {errors.currency_name ? (
              <ErrorMessage>{errors.currency_name}</ErrorMessage>
            ) : null}
          </ErrorWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Value</Label>
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
          <ErrorWrapper>
            {errors.currency_value ? (
              <ErrorMessage>{errors.currency_value}</ErrorMessage>
            ) : null}
          </ErrorWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Tag (from database)</Label>
          <Select
            options={tags}
            valueFrom={"id"}
            show={"title"}
            value={values.tag}
            handleClick={(val: string) => setFieldValue("tag", val)}
            multiple={false}
          />
          <ErrorWrapper>
            {errors.tag ? <ErrorMessage>{errors.tag}</ErrorMessage> : null}
          </ErrorWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Tags (multiple choice)</Label>
          <Select
            options={tags}
            valueFrom={"id"}
            show={"title"}
            value={values.tags}
            handleClick={(val: number) => handleMultiSelect(val)}
            multiple={true}
          />
          <ErrorWrapper>
            {errors.tags ? <ErrorMessage>{errors.tags}</ErrorMessage> : null}
          </ErrorWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>Checkbox</Label>
          <Checkbox
            value={values.consent}
            handleClick={(value: boolean) => setFieldValue("consent", value)}
          >
            I agree
          </Checkbox>
          <ErrorWrapper>
            {errors.consent ? (
              <ErrorMessage>{errors.consent}</ErrorMessage>
            ) : null}
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
      </StyledForm>
    </>
  );
};

export { Form };
