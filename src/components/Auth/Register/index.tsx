import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useFormik } from "formik";
import { MdAlternateEmail } from "react-icons/md";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { toast } from "react-toastify";

import { RegisterSchema } from "utils/Validation";

import Input from "components/Input";
import Button from "components/Button";

import styles from "../styles.module.scss";
import { postRequest } from "api";

interface RegisterProps {
  currentFrom: string;
  setForm: (form: string) => void;
  onSetData: (data: {}) => void;
  displayPassword: boolean;
  onDisplayPassword: () => void;
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
  onSetData,
  displayPassword,
  onDisplayPassword,
}): JSX.Element => {
  const initialValues: InitialForm = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const [displayPasswordConfirm, setDispalyPasswordConfirm] =
    useState<boolean>(false);

  const handleDisplayPasswordConfirm = () => {
    setDispalyPasswordConfirm(!displayPasswordConfirm);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: async (data) => {
      try {
        await postRequest("get_user/", data);
        delete data.password2;
        onSetData(data);
        setForm("verify");
      } catch ({ response }) {
        if (response.status === 409) {
          toast("کاربری با این مشخصات وجود دارد");
        }
        if (response.status === 401) {
          toast("رمز عبور و تکرار رمز عبور یکسان نیستند");
        }
        if (response.status === 400) {
          toast("مشکلی از سمت سرور به وجود آمده است ، لطفا بعدا امتحان کنید");
        }
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
    <>
      <h3 className={styles.title}>ثبت نام</h3>
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
          type={displayPassword ? "text" : "password"}
          name="password"
          value={formik.values.password}
          label="رمزعبور"
          placeholder="*********"
          icon={displayPassword ? <RxEyeOpen /> : <RxEyeClosed />}
          onChange={formik.handleChange}
          onClick={onDisplayPassword}
        />
        <Input
          type={displayPasswordConfirm ? "text" : "password"}
          name="password2"
          value={formik.values.password2}
          label="تکرار رمز عبور"
          placeholder="*********"
          icon={displayPasswordConfirm ? <RxEyeOpen /> : <RxEyeClosed />}
          onChange={formik.handleChange}
          onClick={handleDisplayPasswordConfirm}
        />
        <Button
          content={currentFrom === "register" ? "ثبت نام" : "ورود"}
          type="submit"
          onClick={handleCheckValidation}
          style={{ backgroundColor: "#ffc017" }}
        />
      </form>
      <div className={styles.selectForm}>
        <p>حساب کاربری دارید؟</p>
        <span onClick={() => setForm("login")}>ورود</span>
      </div>
    </>
  );
};

export default Register;
