import React from "react";
import { AiOutlineUser, AiOutlineNumber } from "react-icons/ai";
import { useFormik } from "formik";
import { MdAlternateEmail } from "react-icons/md";
import { RxEyeOpen } from "react-icons/rx";
import { toast } from "react-toastify";

import { RegisterSchema } from "utils/Validation";

import Input from "components/Input";
import Button from "components/Button";

import styles from "./styles.module.scss";

interface RegisterProps {
  currentFrom: boolean;
}

interface InitialForm {
  username: string;
  email: string;
  phone: string;
  password: string;
}

const Register: React.FC<RegisterProps> = ({ currentFrom }): JSX.Element => {
  const initialValues: InitialForm = {
    username: "",
    email: "",
    phone: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCheckValidation = () => {
    if (formik.errors.username) {
      toast(formik.errors.username);
    }
    if (formik.errors.email) {
      toast(formik.errors.email);
    }
    if (formik.errors.phone) {
      toast(formik.errors.phone);
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
        type="email"
        name="email"
        label="ایمیل"
        value={formik.values.email}
        placeholder="example.com@"
        icon={<MdAlternateEmail />}
        onChange={formik.handleChange}
      />
      <Input
        type="number"
        name="phone"
        value={formik.values.phone}
        label="موبایل"
        placeholder="09123456789"
        icon={<AiOutlineNumber />}
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

export default Register;
