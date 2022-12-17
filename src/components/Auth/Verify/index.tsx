import React, { useState } from "react";
import OtpInput from "react-otp-input";

import styles from "../styles.module.scss";

const Verify: React.FC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");

  const handleChange = (otp: string) => {
    setCode(otp);
  };

  return (
    <OtpInput
      value={code}
      onChange={handleChange}
      numInputs={6}
      className={styles.verifyInput}
    />
  );
};

export default Verify;
