import React from "react";
import { FaUnsplash } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { GoFileMedia } from "react-icons/go";
import { BsCode } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";

import styles from "./styles.module.scss";

interface OptionsProps {
  plusPosition: string;
  options: boolean;
}

const Options: React.FC<OptionsProps> = ({
  plusPosition,
  options,
}): JSX.Element => {
  return (
    <ul
      className={`${styles.Options} ${
        plusPosition === "title" && styles.optionsTitle
      } ${options && styles.showOptions}`}
    >
      <li className={styles.option}>
        <GoFileMedia />
        <input type="file" />
      </li>
      <li className={styles.option}>
        <FaUnsplash />
      </li>
      <li className={styles.option}>
        <FiYoutube />
      </li>
      <li className={styles.option}>
        <BsCode />
      </li>
      <li className={styles.option}>
        <BiCodeCurly />
      </li>
    </ul>
  );
};

export default Options;
