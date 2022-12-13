import Image from "next/image";
import React from "react";

import styles from "./styles.module.scss";

interface ProfileProps {
  set: (active: string) => void;
  display: string;
}

const Profile: React.FC<ProfileProps> = ({ set, display }): JSX.Element => {
  return (
    <li onClick={() => set("profile")} className={styles.Item}>
      <Image src="/images/profile.jpg" alt="profile" width={30} height={30} />
      {display === "profile" && (
        <div className={styles.Options}>
          <div className={styles.Head}>
            <Image
              src="/images/profile.jpg"
              alt="profile"
              width={70}
              height={70}
            />
            <div>
              <span>Ali</span>
              <span>amohamadi17@gmail.com</span>
            </div>
          </div>
          <ul className={styles.Items}>
            <li>نوشتن استوری</li>
            <li>استوری ها</li>
            <li>آمار</li>
            <li>تنظیمات</li>
          </ul>
          <ul className={styles.Items}>
            <li>لیست</li>
            <li>انتشار</li>
            <li>توصیه خود را کنترل کنید</li>
            <li>مشارکت در مدیوم</li>
          </ul>
          <ul className={styles.Items}>
            <li>عضو شوید</li>
            <li>کمک</li>
            <li>خروج</li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default Profile;
