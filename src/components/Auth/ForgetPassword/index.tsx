import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import Input from "components/Input";
import Button from "components/Button";
import { toast } from "react-toastify";

import styles from "../styles.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { postRequest } from "api";

interface ForgetPasswordProps {
  setForm: (form: string) => void;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ setForm }) => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("ایمیل معتبر نمی باشد")
        .required("ایمیل الزامی می باشد"),
    }),
    onSubmit: async (data) => {
      try {
        const request = await postRequest("forgot-password/", data);
        console.log(request);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleErrors = () => {
    if (formik.errors.email) {
      toast(formik.errors.email);
    }
  };

  return (
    <>
      <h3 className={styles.title}>بازیابی رمز عبور</h3>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.form}
        style={{ marginTop: "8rem" }}
      >
        <BiArrowBack
          className={styles.arrowBack}
          onClick={() => setForm("login")}
        />
        <Input
          type="email"
          name="email"
          placeholder="example@"
          value={formik.values.email}
          onChange={formik.handleChange}
          label="ایمیل"
        />
        <Button
          type="submit"
          onClick={handleErrors}
          content="بازیابی رمز عبور"
          style={{ backgroundColor: "#ffc017" }}
        />
      </form>
    </>
  );
};

export default ForgetPassword;
