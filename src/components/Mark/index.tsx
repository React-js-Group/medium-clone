import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import {
  BsBookmarkPlus,
  BsFillBookmarkStarFill,
  BsFillLockFill,
} from "react-icons/bs";

import styles from "./styles.module.scss";

const Mark: React.FC = (): JSX.Element => {
  const [mark, setMark] = useState<boolean>(false);

  const handleSetMark = () => {
    setMark(!mark);
    // window.addEventListener("click", () => setMark(false));
  };

  return (
    <>
      <Tippy content="ذخیره">
        <button
          style={{ all: "unset", cursor: "pointer" }}
          onClick={handleSetMark}
        >
          {mark ? <BsFillBookmarkStarFill /> : <BsBookmarkPlus />}
        </button>
      </Tippy>
      <div className={styles.Lists}>
        <ul>
          <li>
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked ? setMark(true) : setMark(false)
              }
            />
            <span>لیست خوانده شدها</span>
            <BsFillLockFill className={styles.lock} />
          </li>
          <li>Create New List</li>
        </ul>
      </div>
    </>
  );
};

export default Mark;
