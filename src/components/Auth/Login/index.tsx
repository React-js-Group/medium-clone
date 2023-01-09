import React from "react";
import { useFormik } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { toast } from "react-toastify";
import { MdPassword } from "react-icons/md";

import Input from "components/Input";
import Button from "components/Button";

import { LoginSchema } from "utils/Validation";

import styles from "../styles.module.scss";
import { postRequest } from "api";
import {
  access,
  refresh,
  toggle,
} from "store/fetchers/authSlice";
import { useDispatch } from "react-redux";

interface LoginProps {
  currentFrom: string;
  setForm: (form: string) => void;
}

interface InitialForm {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({
  currentFrom,
  setForm,
}): JSX.Element => {
  const initialValues: InitialForm = { email: "", password: "" };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (data) => {
      try {
        const res = await postRequest("login/", data);

        console.log("hh", res);
        if (res.status !== 200) {
          console.log("hi");
        }
        dispatch(access(res.data.access));
        dispatch(refresh(res.data.refresh));
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
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
      >
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
          content={
            currentFrom === "register" ? "ثبت نام" : "ورود"
          }
          type="submit"
          onClick={handleCheckValidation}
          style={{
            backgroundColor: "#ffc017",
          }}
          className={styles.button}
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
