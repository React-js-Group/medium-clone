import React from "react";
import { useFormik } from "formik";
import { AiOutlineUser } from "react-icons/ai";

import Input from "components/Input";
import Button from "components/Button";

import { LoginSchema } from "utils/Validation";

import styles from "../styles.module.scss";
import { toast } from "react-toastify";
import { postConfiguration } from "api/api";
import { MdPassword } from "react-icons/md";

interface LoginProps {
  currentFrom: string;
}

interface InitialForm {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ currentFrom }): JSX.Element => {
  const initialValues: InitialForm = { username: "", password: "" };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (data) => {
      try {
        const res = await postConfiguration(data, "login/");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleCheckValidation = () => {
    if (formik.errors.username) {
      toast(formik.errors.username);
    }

    if (formik.errors.password) {
      toast(formik.errors.password);
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
        type="password"
        name="password"
        value={formik.values.password}
        label="رمز عبور"
        placeholder="*********"
        icon={<MdPassword />}
        onChange={formik.handleChange}
      />

      <Button
        content={currentFrom === "register" ? "ثبت نام" : "ورود"}
        type="submit"
        onClick={handleCheckValidation}
        style={{
          backgroundColor: "#ffc017",
        }}
      />
    </form>
  );
};

export default Login;
