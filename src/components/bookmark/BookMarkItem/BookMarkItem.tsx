import classes from "./BookMarkItem.module.scss";

const BookMarkItem: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h3>نام لیست</h3>

        <div className={classes.btnBox}>
          <button className={classes.showlist}>
            مشاهده لیست
          </button>
          <p className={classes.postNum}>5 پست</p>
        </div>
      </div>
      <div className={classes.imgs}></div>
    </div>
  );
};

export default BookMarkItem;
