import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "store/fetchers/authSlice";

import Login from "./Login";
import Register from "./Register";

import styles from "./styles.module.scss";
import Verify from "./Verify";

const Auth: React.FC = (): JSX.Element => {
  const [currentFrom, setCurrentForm] = useState<string>("register");
  const dispatch = useDispatch();

  const handleSetCurrentForm = (form: string) => {
    setCurrentForm(form);
  };

  return (
    <div
      className={`${styles.container} ${
        currentFrom === "verify" && styles.verifyForm
      }`}
    >
      <FaTimes className={styles.times} onClick={() => dispatch(toggle())} />
      <h3 className={styles.title}>
        {currentFrom === "register"
          ? "ثبت نام"
          : currentFrom === "login"
          ? "ورود"
          : "تایید ایمیل"}
      </h3>
      {currentFrom === "verify" && (
        <p>لطفا کد ارسال شده به ایمیل را وارد نمایید</p>
      )}
      {currentFrom === "register" ? (
        <Register currentFrom={currentFrom} setForm={handleSetCurrentForm} />
      ) : currentFrom === "login" ? (
        <Login currentFrom={currentFrom} />
      ) : (
        <Verify />
      )}
      <div className={styles.selectForm}>
        <p>
          {currentFrom === "register" ? (
            <>
              حساب کاربری دارید؟
              <span onClick={() => setCurrentForm("login")}>ورود</span>
            </>
          ) : currentFrom === "login" ? (
            <>
              حساب کاربری ندارید؟
              <span onClick={() => setCurrentForm("register")}>ثبت نام</span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default Auth;
