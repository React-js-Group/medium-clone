import React from "react";
import styles from "./styles.module.scss";

const HeaderMain = () => {
  return (
    <>
      <div className={styles.titleDiv}>
        <h1>کنجکاو بمان.</h1>
        <span>
          <h3>
            داستان، تفکر و تخصص را کشف کنید <br></br> از نویسندگان در هر موضوع.
          </h3>
        </span>
        <button
          className={styles.button}
          style={{ fontSize: "22px", padding: "4px 50px 6px" }}
        >
          بخوانید ...
        </button>
      </div>
      <div className={styles.svgDiv}></div>
    </>
  );
};

export default HeaderMain;
