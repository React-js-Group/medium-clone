import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "store/fetchers/authSlice";

import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import Verify from "./Verify";

import styles from "./styles.module.scss";

const Auth: React.FC = (): JSX.Element => {
  const [currentFrom, setCurrentForm] =
    useState<string>("login");

  const handleSetCurrentForm = (form: string) => {
    setCurrentForm(form);
  };

  return (
    <>
      {currentFrom === "register" ? (
        <Register
          currentFrom={currentFrom}
          setForm={handleSetCurrentForm}
        />
      ) : currentFrom === "login" ? (
        <Login
          currentFrom={currentFrom}
          setForm={handleSetCurrentForm}
        />
      ) : currentFrom === "forgetPassword" ? (
        <ForgetPassword setForm={handleSetCurrentForm} />
      ) : (
        <Verify setForm={handleSetCurrentForm} />
      )}
    </>
  );
};

export default Auth;
