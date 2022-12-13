import Button from "components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoLockClosed } from "react-icons/io5";

import styles from "./styles.module.scss";

const Main: React.FC = (): JSX.Element => {
  const [options, setOptions] = useState<boolean>(false);

  return (
    <main className={styles.Main}>
      <div className={styles.Head}>
        <div>
          <Image
            alt="profile"
            src="/images/profile.jpg"
            width={50}
            height={50}
          />
          <h1>Ali</h1>
        </div>
        <BiDotsHorizontalRounded onClick={() => setOptions(!options)} />
        {options && (
          <div className={styles.Options}>
            <ul>
              <li>لینک پروفایل</li>
              <li>طراحی پروفایل</li>
            </ul>
          </div>
        )}
      </div>
      <nav className={styles.Navbar}>
        <ul>
          <li>خانه</li>
          <li>
            <Link href="/profile/about">درباره</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.ReadingList}>
        <div className={styles.ReadingListRight}>
          <h3>ReadingList</h3>
          <div>
            <Button
              type="button"
              content="نمایش لیست"
              style={{
                border: "1px solid #292929",
                background: "transparent",
                borderRadius: "100px",
                color: "#292929",
                width: "auto",
              }}
            />
            <IoLockClosed />
          </div>
        </div>
        <div className={styles.ReadingListLeft}>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
