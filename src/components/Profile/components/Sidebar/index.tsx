import React from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "components/Button";

import styles from "./styles.module.scss";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <aside className={styles.Sidebar}>
      <div>
        <button type="button">Get unlimited access</button>
      </div>
      <div>
        <Image
          alt="profile"
          src="/images/profile.jpg"
          width={100}
          height={100}
        />
        <p>ALI</p>
        <Link href="#">Edit profile</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
