import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "store/fetchers/authSlice";

import Login from "./Login";
import Register from "./Register";

import styles from "./styles.module.scss";

const Auth: React.FC = (): JSX.Element => {
  const [currentFrom, setCurrentForm] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <FaTimes className={styles.times} onClick={() => dispatch(toggle())} />
      <h3 className={styles.title}>{currentFrom ? "ثبت نام" : "ورود"}</h3>
      {currentFrom ? (
        <Register currentFrom={currentFrom} />
      ) : (
        <Login currentFrom={currentFrom} />
      )}
      <div className={styles.selectForm}>
        <p>
          {currentFrom ? (
            <>
              حساب کاربری دارید؟
              <span
                onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                  setCurrentForm(!currentFrom)
                }
              >
                ورود
              </span>
            </>
          ) : (
            <>
              حساب کاربری ندارید؟
              <span
                onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                  setCurrentForm(!currentFrom)
                }
              >
                ثبت نام
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
