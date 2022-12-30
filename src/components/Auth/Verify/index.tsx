import React, { useRef, useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import AuthCode, { AuthCodeRef } from "react-auth-code-input";

import Button from "../../Button";

import { postRequest } from "api";

import styles from "../styles.module.scss";
import { BiArrowBack } from "react-icons/bi";

interface VerifyProps {
  setForm: (form: string) => void;
}

const Verify: React.FC<VerifyProps> = ({ setForm }): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const AuthInputRef = useRef<AuthCodeRef>(null);

  const handleSubmitCode = async () => {
    try {
      console.log(code);
      const res = await postRequest("register/", { data: code });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    AuthInputRef.current?.focus();
  }, []);

  return (
    <div className={styles.verifyForm}>
      <BiArrowBack
        className={styles.arrowBack}
        onClick={() => setForm("login")}
      />
      <h3 className={styles.title}>تایید ایمیل</h3>
      <p>لطفا کد ارسال شده به ایمیل را وارد نمایید</p>
      <AuthCode
        allowedCharacters="numeric"
        length={6}
        ref={AuthInputRef}
        onChange={(otp: string) => setCode(otp)}
        inputClassName={styles.authCode}
      />
      <Button
        content="تایید"
        type="button"
        style={{
          backgroundColor: "#118811",
          padding: "10px",
          margin: "1rem 0",
        }}
        onClick={handleSubmitCode}
      />
    </div>
  );
};

export default Verify;
