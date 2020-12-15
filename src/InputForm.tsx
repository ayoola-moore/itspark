import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { findRangeDivisibleBy3 } from "./lib/findRangeDivisibleBy3";

interface IValues {
  firstNumber: number;
  secondNumber: number;
}

const InputForm = () => {
  const formik = useFormik({
    initialValues: {} as IValues,
    validationSchema: Yup.object({
      firstNumber: Yup.number()
        .min(
          0,
          "negative numbers are not allowed. number should greater than 0"
        )
        .integer()
        .required("first number is required"),
      secondNumber: Yup.number()
        .min(
          0,
          "negative numbers are not allowed. number should greater than 0 & greater than first number"
        )
        .moreThan(
          Yup.ref("firstNumber"),
          "second number should be greater than first"
        )
        .integer()
        .required("second number is required"),
    }),

    onSubmit: ({ firstNumber, secondNumber }: IValues) => {
      alert(findRangeDivisibleBy3(firstNumber, secondNumber));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="firstNumber">First Number</label>
          <input
            id="firstNumber"
            name="firstNumber"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstNumber}
            placeholder={"Enter first number"}
          />
          <div className={"error"}>
            {formik.touched.firstNumber && formik.errors.firstNumber ? (
              <div>{formik.errors.firstNumber}</div>
            ) : null}
          </div>
          <br />
          <label htmlFor="secondNumber">Second Number</label>
          <input
            id="secondNumber"
            name="secondNumber"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.secondNumber}
            placeholder={"Enter second number"}
          />
          <div className={"error"}>
            {formik.touched.secondNumber && formik.errors.secondNumber ? (
              <div>{formik.errors.secondNumber}</div>
            ) : null}
          </div>
          <br />
          <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
