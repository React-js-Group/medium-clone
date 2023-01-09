import classes from "./BookMark.module.scss";
import BookMarkBody from "./BookMarkBody/BookMarkBody";

const BookMark: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <BookMarkBody />
    </div>
  );
};

export default BookMark;
