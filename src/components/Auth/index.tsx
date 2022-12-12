import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";

import styles from "./styles.module.scss";

const Auth: React.FC = (): JSX.Element => {
  const [currentFrom, setCurrentForm] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {currentFrom ? "به وبلاگ ملحق شو" : "ورود"}
      </h3>
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
