import BookMarkItem from "../BookMarkItem/BookMarkItem";
import classes from "./BookMarkBox.module.scss";

const BookMarkBox: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <BookMarkItem />
      <BookMarkItem />
      <BookMarkItem />
      <BookMarkItem />
      <BookMarkItem />
      <BookMarkItem />
    </div>
  );
};

export default BookMarkBox;
