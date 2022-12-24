import { useState } from "react";
import BookMarkModel from "../BookMarkModel";
import classes from "./BookMarkHeader.module.scss";

const BookMarkHeader: React.FC = (): JSX.Element => {
  const [model, setModel] = useState(false);
  const handelClick = () => {
    setModel(!model);
  };
  return (
    <div className={classes.container}>
      <h1>لیست شما</h1>
      <button
        className={classes.newListBtn}
        onClick={handelClick}
      >
        لیست جدید
      </button>
      {model && <BookMarkModel handelClick={handelClick} />}
    </div>
  );
};

export default BookMarkHeader;
