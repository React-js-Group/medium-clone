import classes from "./BookMarkHeader.module.scss";

const BookMarkHeader: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <h1>لیست شما</h1>
      <button className={classes.newListBtn}>لیست جدید</button>
    </div>
  );
};

export default BookMarkHeader;
