import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h4 style={{ margin: "0" }}>
            بیشتر از آنچه برای شما مهم است کشف کنید
          </h4>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button}>برنامه نویسی</button>
          <button className={styles.button}>علم داده</button>
          <button className={styles.button}>فناوری</button>
          <button className={styles.button}>خود بهبودی </button>
          <button className={styles.button}>نوشتن</button>
          <button className={styles.button}>روابط</button>
          <button className={styles.button}>یادگیری ماشین</button>
          <button className={styles.button}>بهره وری</button>
          <button className={styles.button}>سیاست</button>
        </div>
        <div className={styles.divider}></div>
        <div>
          <ul className={styles.ul}>
            <li> کمک</li>
            <li>وضعیت</li>
            <li>نویسندگان</li>
            <li>وبلاگ</li>
            <li>مشاغل</li>
            <li>حریم خصوصی</li>
            <li>مقررات</li>
            <li>درباره</li>
            <li>متن به گفتار</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
