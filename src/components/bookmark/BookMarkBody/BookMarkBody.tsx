import SideBar from "components/layout/sideBar/SideBar";
import BookMarkBox from "../BookMarkBox/BookMarkBox";
import BookMarkHeader from "../BookMarkHeader/BookMarkHeader";
import BookMarkMenu from "../BookMarkMenu/BookMarkMenu";
import classes from "./BookMarkBody.module.scss";

const BookMarkBody: React.FC = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <BookMarkHeader />
      <BookMarkMenu />
      <BookMarkBox />
    </div>
  );
};

export default BookMarkBody;
