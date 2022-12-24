import React from "react";
import { useFormik } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { RxEyeOpen } from "react-icons/rx";

import Input from "components/Input";
import Button from "components/Button";

import { LoginSchema } from "utils/Validation";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";

interface LoginProps {
  currentFrom: boolean;
}

interface InitialForm {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({
  currentFrom,
}): JSX.Element => {
  const initialValues: InitialForm = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
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
        icon={<RxEyeOpen />}
        onChange={formik.handleChange}
      />

      <Button
        content={currentFrom ? "ثبت نام" : "ورود"}
        type="submit"
        onClick={handleCheckValidation}
        color="#ffc017"
      />
    </form>
  );
};

export default Login;
