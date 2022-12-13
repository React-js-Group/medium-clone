import React from "react";
import { BsThreeDots } from "react-icons/bs";

import styles from "./styles.module.scss";

interface ShareProps {
  set: (active: string) => void;
  display: string;
}

const Share: React.FC<ShareProps> = ({ set, display }) => {
  return (
    <li onClick={() => set("share")} className={styles.Item}>
      <BsThreeDots />
      {display === "share" && (
        <div className={styles.Share}>
          <ul className={styles.Items}>
            <li>اشتراک گذاری با لینک</li>
            <li>اشتراک گذاری در توییتر</li>
            <li>تغییر ویژگی های تصویر</li>
            <li>تغییر نمایش عنوان/توضیحات</li>
            <li>تغییر موضوع</li>
            <li>نمایش تاریخچه</li>
            <li>تنظیمات بیشتر</li>
          </ul>
          <ul className={styles.Items}>
            <li>نکات و میانبر های کیبرد</li>
            <li>کمک بیشتر</li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default Share;
