import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import config from "config/config.json";

import { RegisterSchema } from "utils/Validation";

import Input from "components/Input";
import Button from "components/Button";

import styles from "../styles.module.scss";
import { postConfiguration } from "api/api";

interface RegisterProps {
  currentFrom: string;
  setForm: (form: string) => void;
}

interface InitialForm {
  username: string;
  email: string;
  password: string;
  password2: string;
}

const Register: React.FC<RegisterProps> = ({
  currentFrom,
  setForm,
}): JSX.Element => {
  const initialValues: InitialForm = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const URL = config.URL;

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: async (data) => {
      try {
        const res = await postConfiguration(data, "/get_user/");
        console.log(res);
        setForm("verify");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleCheckValidation = () => {
    if (formik.errors.username) {
      toast(formik.errors.username);
    }
    if (formik.errors.email) {
      toast(formik.errors.email);
    }
    if (formik.errors.password) {
      toast(formik.errors.password);
    }

    if (formik.errors.password2) {
      toast(formik.errors.password2);
    }
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="username"
        label="نام کاربری"
        placeholder="مثلا :Alimh"
        value={formik.values.username}
        icon={<AiOutlineUser />}
        onChange={formik.handleChange}
      />
      <Input
        type="email"
        name="email"
        label="ایمیل"
        value={formik.values.email}
        placeholder="example.com@"
        icon={<MdAlternateEmail />}
        onChange={formik.handleChange}
      />
      <Input
        type="password"
        name="password"
        value={formik.values.password}
        label="رمزعبور"
        placeholder="*********"
        icon={<MdOutlinePassword />}
        onChange={formik.handleChange}
      />
      <Input
        type="password"
        name="password2"
        value={formik.values.password2}
        label="تکرار رمز عبور"
        placeholder="*********"
        icon={<MdOutlinePassword />}
        onChange={formik.handleChange}
      />
      <Button
        content={currentFrom === "register" ? "ثبت نام" : "ورود"}
        type="submit"
        onClick={handleCheckValidation}
        style={{ backgroundColor: "#ffc017" }}
      />
    </form>
  );
};

export default Register;
