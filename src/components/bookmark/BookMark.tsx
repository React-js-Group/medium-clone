import SideBar from "components/layout/sideBar/SideBar";
import classes from "./BookMark.module.scss";
import BookMarkBody from "./BookMarkBody/BookMarkBody";

const BookMark: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <SideBar />
      <BookMarkBody />
    </div>
  );
};

export default BookMark;
