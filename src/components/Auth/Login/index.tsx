import React from "react";
import { useFormik } from "formik";
import { AiOutlineUser } from "react-icons/ai";

import Input from "components/Input";
import Button from "components/Button";

import { LoginSchema } from "utils/Validation";

import styles from "../styles.module.scss";
import { toast } from "react-toastify";
import { postRequest } from "api";
import { MdPassword } from "react-icons/md";

interface LoginProps {
  currentFrom: string;
  setForm: (form: string) => void;
}

interface InitialForm {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ currentFrom, setForm }): JSX.Element => {
  const initialValues: InitialForm = { email: "", password: "" };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (data) => {
      try {
        const res = await postRequest("login/", data);
        if (res.status !== 200) {
          console.log("hi");
        }
        console.log(res.status);
      } catch (err) {
        toast("اطلاعات وارد شده صحیح نمی باشد");
        console.log(err);
      }
    },
  });

  const handleCheckValidation = () => {
    if (formik.errors.email) {
      toast(formik.errors.email);
    }

    if (formik.errors.password) {
      toast(formik.errors.password);
    }
  };

  return (
    <>
      <h3 className={styles.title}>ورود</h3>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="email"
          label="ایمیل"
          placeholder="example@"
          value={formik.values.email}
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
      <div className={styles.selectForm}>
        <p>حساب کاربری ندارید؟</p>
        <span onClick={() => setForm("register")}>ثبت نام</span>
      </div>
      <p
        onClick={() => setForm("forgetPassword")}
        className={styles.forgetPasswordLink}
      >
        رمز عبور خود را فراموش کرده اید؟
      </p>
    </>
  );
};

export default Login;
