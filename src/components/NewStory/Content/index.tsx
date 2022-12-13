import React, { useEffect, useRef, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import Options from "./Options";

import styles from "./styles.module.scss";

const Content: React.FC = (): JSX.Element => {
  const [plusPosition, setPlusPositoin] = useState<string>("");
  const [options, setOptions] = useState<boolean>(false);
  const DescRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    DescRef.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="عنوان"
          type="text"
          onFocus={() => {
            setPlusPositoin("title");
            setOptions(false);
          }}
        />
      </div>
      <span
        className={`${styles.Plus} ${
          plusPosition === "title" && styles.plusPosition
        }`}
        onClick={() => setOptions(!options)}
      >
        <BsPlusCircle
          className={`${options ? styles.rotate : styles.rotateBack}`}
        />
      </span>
      <Options plusPosition={plusPosition} options={options} />
      <div>
        <input
          type="text"
          placeholder="توضیحات"
          ref={DescRef}
          onFocus={() => {
            setPlusPositoin("description");
            setOptions(false);
          }}
        />
      </div>
    </div>
  );
};

export default Content;
