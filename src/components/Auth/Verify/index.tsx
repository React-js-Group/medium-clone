import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import config from "config/config.json";

import Button from "../../Button";

import styles from "../styles.module.scss";
import { userRegister } from "api/api";

const Verify: React.FC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");

  const handleChange = (otp: string) => {
    setCode(otp);
  };

  const handleSubmitCode = async () => {
    const data = {
      data: code,
    };

    try {
      const res = await userRegister(data, "/register/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={6}
        className={styles.verifyInput}
      />
      <Button
        content="تایید"
        type="button"
        style={{ backgroundColor: "#118811" }}
        onClick={handleSubmitCode}
      />
    </>
  );
};

export default Verify;
